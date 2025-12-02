import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServices } from '../services/api.service';
import { Commercant, Fournisseur } from '../models/user';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css',
})
export class AdminUsersComponent implements OnInit {
  private apiService = inject(ApiServices);
  partenaire!: any[];

  fournisseur: Fournisseur[] = [];
  commercant: Commercant[] = [];
  error: string | null = null;

  loadPartenaire() {
    forkJoin({
      fournisseurs: this.apiService.getFournisseur(),
      commercants: this.apiService.getCommercant(),
    }).subscribe({
      next: (data) => {
        this.fournisseur = data.fournisseurs;
        this.commercant = data.commercants;

        this.partenaire = [...this.fournisseur, ...this.commercant];
      },
      error: (err) => console.error(err),
    });
  }

  ngOnInit(): void {
    this.loadPartenaire();
  }
}
