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

  fournisseur: Fournisseur[] = [];
  commercant: Commercant[] = [];
  commandes: CommandeGroupee[] = [];
  transaction: Transaction[] = [];

  partenaire!: any[];

  getAllProject() {
    this.apiService.getProduit().subscribe({
      next: (response) => {
        this.produits = response;
      },
    });
  }

  // getAllFournisseur() {
  //   this.apiService.getFournisseur().subscribe({
  //     next: (response) => {
  //       this.fournisseur = response;
  //     },
  //   });
  // }

  // getAllCommaercant() {
  //   this.apiService.getCommercant().subscribe({
  //     next: (response) => {
  //       this.commercant = response;
  //     },
  //   });
  // }

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
    });
  }

  getAllTransaction() {
    this.apiService.getTransactions().subscribe({
      next: (responses) => {
        this.transaction = responses;
      },
    });
  }

  ngOnInit() {
    this.loadPartenaire();
    this.getAllProject();
    this.getAllCommande();
    this.getAllTransaction();
  }
}
