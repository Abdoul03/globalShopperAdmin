import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;

  constructor(private readonly router: Router) {}

  onSubmit() {
    // TODO: brancher l'appel API d'authentification
    console.log({ email: this.email, password: this.password, rememberMe: this.rememberMe });
    this.router.navigate(['/admin/dashboard']);
  }
}
