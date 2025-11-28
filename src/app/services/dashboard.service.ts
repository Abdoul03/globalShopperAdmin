import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardStats {
  usersCount: number;
  fournisseursCount: number;
  commercantsCount: number;
  partnersCount: number;
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly BASE_URL = 'https://globalshopper.onrender.com/api';

  constructor(private http: HttpClient) {}

  getSummary(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.BASE_URL}/dashboard/summary`);
  }
}
