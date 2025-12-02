import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServices } from '../services/api.service';
import { Fournisseur } from '../models/user';

@Component({
  selector: 'app-admin-suppliers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-suppliers.component.html',
  styleUrl: './admin-suppliers.component.css',
})
export class AdminSuppliersComponent implements OnInit {
  private apiService = inject(ApiServices);

  suppliers: Fournisseur[] = [];
  error: string | null = null;

  getAllFournisseur() {
    this.apiService.getFournisseur().subscribe({
      next: (response) => {
        this.suppliers = response;
      },
      error: () => {
        this.error = 'Erreur de chargement des catégories';
      },
    });
  }

  ngOnInit(): void {
    this.getAllFournisseur();
  }

  toggleActive(supplier: { active: boolean }) {
    supplier.active = !supplier.active;
  }
}
