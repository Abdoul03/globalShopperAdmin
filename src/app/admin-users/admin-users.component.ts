import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent {
  users = [
    {
      name: 'Aboubacar Sogoba',
      email: 'ab94640419@gmail.com',
      type: 'Commerçant',
      registeredAt: '15/10/2025',
    },
    {
      name: 'Aboubacar Sogoba',
      email: 'ab94640419@gmail.com',
      type: 'Fournisseur',
      registeredAt: '25/10/2025',
    },
    {
      name: 'Aboubacar Sogoba',
      email: 'ab94640419@gmail.com',
      type: 'Fournisseur',
      registeredAt: '25/10/2025',
    },
    {
      name: 'Aboubacar Sogoba',
      email: 'ab94640419@gmail.com',
      type: 'Fournisseur',
      registeredAt: '25/10/2025',
    },
    {
      name: 'Aboubacar Sogoba',
      email: 'ab94640419@gmail.com',
      type: 'Fournisseur',
      registeredAt: '25/10/2025',
    },
  ];
}
