import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../env';
import { Commercant, Fournisseur } from '../models/user';
import { Categorie } from '../models/categorie';
import { CommandeGroupee } from '../models/commandeGroupee';
import { ProduitCount } from './produit.service';
import { Produits } from '../models/produits';
@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  constructor(private http: HttpClient) {}

  getCommercant() {
    return this.http.get<Commercant[]>(`${environement.remoteUrl}/commercant`);
  }

  getFournisseur() {
    return this.http.get<Fournisseur[]>(`${environement.remoteUrl}/fournisseur`);
  }

  ajoutCategorie(nom: string) {
    return this.http.post<Categorie>(`${environement.remoteUrl}/categorie`, { nom });
  }

  getCategorie() {
    return this.http.get<Categorie[]>(`${environement.remoteUrl}/categorie`);
  }

  getCommande() {
    return this.http.get<CommandeGroupee[]>(`${environement.remoteUrl}/commandeGroupee`);
  }

  getProduit() {
    return this.http.get<Produits>(`${environement.remoteUrl}/produits`);
  }
}
