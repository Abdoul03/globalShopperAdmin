import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiServices } from '../services/api.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-categories.component.html',
  styleUrl: './admin-categories.component.css'
})
export class AdminCategoriesComponent implements OnInit {
  categories: Categorie[] = [];
  loading = false;
  error: string | null = null;
  newCategorieName = '';

  constructor(private api: ApiServices) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.loading = true;
    this.api.getCategorie().subscribe({
      next: (list) => { this.categories = list; this.loading = false; },
      error: () => { this.error = 'Erreur de chargement des catégories'; this.loading = false; }
    });
  }

  addCategorie(): void {
    const nom = this.newCategorieName?.trim();
    if (!nom) { return; }
    this.loading = true;
    this.api.ajoutCategorie(nom).subscribe({
      next: () => { this.newCategorieName = ''; this.loadCategories(); },
      error: () => { this.error = 'Erreur lors de l\'ajout'; this.loading = false; }
    });
  }
}
