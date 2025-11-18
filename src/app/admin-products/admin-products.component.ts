import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent {
  products = [
    {
      name: 'Panneau solaire 200 W',
      supplier: 'Aboubacar Sogoba',
      price: '10 000 FCFA',
      moq: 1000,
    },
    {
      name: 'Panneau solaire 200 W',
      supplier: 'Amadou Sogoba',
      price: '10 000 FCFA',
      moq: 1000,
    },
    {
      name: 'Power bank 3000 AP',
      supplier: 'Ibrahim Sogoba',
      price: '10 000 FCFA',
      moq: 1000,
    },
    {
      name: 'Panneau solaire 200 W',
      supplier: 'Youssouf Sogoba',
      price: '10 000 FCFA',
      moq: 1000,
    },
    {
      name: 'Panneau solaire 200 W',
      supplier: 'Mohamed Sogoba',
      price: '10 000 FCFA',
      moq: 1000,
    },
    {
      name: 'Panneau solaire 200 W',
      supplier: 'Aboubacar Sogoba',
      price: '10 000 FCFA',
      moq: 1000,
    },
  ];
}
