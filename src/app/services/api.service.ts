import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../env';
import { Commercant, Fournisseur } from '../models/user';
import { Categorie } from '../models/categorie';
import { CommandeGroupee } from '../models/commandeGroupee';
import { Produits } from '../models/produits';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  constructor(private http: HttpClient) {}

  getCommercant(): Observable<Commercant[]> {
    return this.http.get<Commercant[]>(`${environement.remoteUrl}/commercant`);
  }

  getFournisseur(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${environement.remoteUrl}/fournisseur`);
  }

  ajoutCategorie(nom: string): Observable<Categorie> {
    return this.http.post<Categorie>(`${environement.remoteUrl}/categorie`, { nom });
  }

  getCategorie(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${environement.remoteUrl}/categorie`);
  }

  getCommande(): Observable<CommandeGroupee[]> {
    return this.http.get<CommandeGroupee[]>(`${environement.remoteUrl}/commandeGroupee`);
  }

  getProduit(): Observable<Produits[]> {
    return this.http.get<Produits[]>(`${environement.remoteUrl}/produits`);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environement.remoteUrl}/transaction`);
  }
}
