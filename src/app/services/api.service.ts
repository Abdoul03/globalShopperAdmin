import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from '../env';
import { Commercant, Fournisseur } from '../models/user';
import { Categorie } from '../models/categorie';
import { CommandeGroupee } from '../models/commande-groupee';
@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  constructor(private htt: HttpClient) {}

  getCommercant() {
    return this.htt.get<Commercant[]>(`${environement.apiUrl}/commercant`);
  }

  getFournisseur() {
    return this.htt.get<Fournisseur[]>(`${environement.apiUrl}/fournisseur`);
  }

  ajoutCategorie(nom: string) {
    return this.htt.post<Categorie>(`${environement.apiUrl}/categorie`, { nom });
  }

  getCategorie() {
    return this.htt.get<Categorie[]>(`${environement.apiUrl}/categorie`);
  }

  getCommande(): Observable<CommandeGroupee[]> {
    return this.htt.get<CommandeGroupee[]>(`${environement.apiUrl}/commandeGroupee`);
  }
}
