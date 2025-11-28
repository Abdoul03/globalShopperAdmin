import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      identifiant: ['', [Validators.required]],
      motDePasse: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    // Rediriger vers le tableau de bord si déjà connecté
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin/dashboard']);
    }

    // Gérer l'état désactivé des champs en fonction de l'état de chargement
    this.loginForm.get('isLoading')?.valueChanges.subscribe(isLoading => {
      if (isLoading) {
        this.loginForm.get('identifiant')?.disable();
        this.loginForm.get('motDePasse')?.disable();
        this.loginForm.get('rememberMe')?.disable();
      } else {
        this.loginForm.get('identifiant')?.enable();
        this.loginForm.get('motDePasse')?.enable();
        this.loginForm.get('rememberMe')?.enable();
      }
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Désactiver les champs pendant le chargement
    this.loginForm.get('identifiant')?.disable();
    this.loginForm.get('motDePasse')?.disable();
    this.loginForm.get('rememberMe')?.disable();

    const { identifiant, motDePasse, rememberMe } = this.loginForm.value;

    this.authService.login(identifiant, motDePasse, rememberMe)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          // Réactiver les champs après la fin de la requête
          this.loginForm.get('identifiant')?.enable();
          this.loginForm.get('motDePasse')?.enable();
          this.loginForm.get('rememberMe')?.enable();
        })
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/admin/dashboard']);
        },
        error: (error) => {
          console.error('Login error:', error);
          this.errorMessage = error.message || 'Une erreur est survenue lors de la connexion';
        }
      });
  }
}
