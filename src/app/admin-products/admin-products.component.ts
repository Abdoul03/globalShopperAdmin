import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produits } from '../models/produits';
import { ApiServices } from '../services/api.service';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css',
})
export class AdminProductsComponent implements OnInit {
  private apiService = inject(ApiServices);
  produits: Produits[] = [];
  error: string | null = null;

  getAllProduit() {
    this.apiService.getProduit().subscribe({
      next: (response) => {
        this.produits = response;
      },
      error: () => {
        this.error = 'Erreur de chargement des catégories';
      },
    });
  }

  ngOnInit(): void {
    this.getAllProduit();
  }
}
