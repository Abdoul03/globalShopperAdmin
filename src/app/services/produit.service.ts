import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProduitCount { count: number; }

@Injectable({ providedIn: 'root' })
export class ProduitService {
  private readonly BASE_URL = 'https://globalshopper.onrender.com/api';

  constructor(private http: HttpClient) {}

  getProduitsCount(): Observable<ProduitCount> {
    return this.http.get<ProduitCount>(`${this.BASE_URL}/produits/count`);
  }
}
