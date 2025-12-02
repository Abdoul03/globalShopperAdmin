import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServices } from '../services/api.service';
import { Produits } from '../models/produits';
import { Commercant, Fournisseur } from '../models/user';
import { forkJoin } from 'rxjs';
import { CommandeGroupee } from '../models/commandeGroupee';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  private apiService = inject(ApiServices);

  produits!: Produits[];
  error: string | null = null;
  fournisseur: Fournisseur[] = [];
  commercant: Commercant[] = [];
  commandes: CommandeGroupee[] = [];
  transaction: Transaction[] = [];

  partenaire!: any[];

  getAllProduit() {
    this.apiService.getProduit().subscribe({
      next: (response) => {
        this.produits = response;
      },
    });
  }

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

  getAllCommande() {
    this.apiService.getCommande().subscribe({
      next: (responses) => {
        this.commandes = responses;
        console.log(this.commandes);
      },
      error: () => {
        this.error = 'Erreur de chargement des catégories';
      },
    });
  }

  getAllTransaction() {
    this.apiService.getTransactions().subscribe({
      next: (responses) => {
        this.transaction = responses;
      },
    });
  }

  ngOnInit(): void {
    this.loadPartenaire();
    this.getAllProduit();
    this.getAllCommande();
    this.getAllTransaction();
  }
}
