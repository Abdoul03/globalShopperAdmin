import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { catchError, tap, filter, switchMap, take } from 'rxjs/operators';
import { environement } from '../env';

interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

interface AuthRequest {
  identifiant: string;
  motDePasse: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // Utilisation du proxy
  private readonly ACCESS_TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private http: HttpClient,
    @Inject(JWT_OPTIONS) private jwtOptions: any,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    this.isAuthenticatedSubject.next(this.isLoggedIn());
  }

  login(identifiant: string, motDePasse: string, rememberMe: boolean): Observable<TokenPair> {
    const authRequest: AuthRequest = { identifiant, motDePasse };
    
    return this.http.post<TokenPair>(`${environement.apiUrl}/auth/login`, authRequest, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      tap(tokens => this.saveTokens(tokens, rememberMe)),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Une erreur est survenue';
        if (error.status === 401) {
          errorMessage = 'Identifiant ou mot de passe incorrect';
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  private saveTokens(tokens: TokenPair, rememberMe: boolean): void {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem(this.ACCESS_TOKEN_KEY, tokens.accessToken);
    storage.setItem(this.REFRESH_TOKEN_KEY, tokens.refreshToken);
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    [window.localStorage, window.sessionStorage].forEach(storage => {
      storage.removeItem(this.ACCESS_TOKEN_KEY);
      storage.removeItem(this.REFRESH_TOKEN_KEY);
    });
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY) || sessionStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY) || sessionStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  getDisplayName(): string {
    const token = this.getAccessToken();
    if (!token) {
      return '';
    }
    try {
      const payload: any = this.jwtHelper.decodeToken(token);
      const name =
        payload?.name ||
        payload?.fullName ||
        (payload?.given_name && payload?.family_name ? `${payload.given_name} ${payload.family_name}` : '') ||
        payload?.username ||
        payload?.preferred_username ||
        payload?.email ||
        payload?.sub ||
        '';
      return typeof name === 'string' ? name : '';
    } catch {
      return '';
    }
  }

  isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  refreshToken(): Observable<TokenPair> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      this.logout();
      return throwError(() => new Error('No refresh token available'));
    }

    if (this.isRefreshing) {
      return this.refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(() => {
          const newTokens = {
            accessToken: this.getAccessToken()!,
            refreshToken: refreshToken
          } as TokenPair;
          return of(newTokens);
        })
      );
    }

    this.isRefreshing = true;
    this.refreshTokenSubject.next(null);

    return this.http.post<TokenPair>(`${environement.apiUrl}/auth/refresh`, { refreshToken }).pipe(
      tap(tokens => {
        this.saveTokens(tokens, localStorage.getItem(this.REFRESH_TOKEN_KEY) !== null);
        this.refreshTokenSubject.next(tokens.accessToken);
        this.isRefreshing = false;
      }),
      catchError(error => {
        this.isRefreshing = false;
        this.logout();
        return throwError(() => error);
      })
    );
  }
}
