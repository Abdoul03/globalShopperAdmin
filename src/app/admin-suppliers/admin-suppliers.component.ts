import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-suppliers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-suppliers.component.html',
  styleUrl: './admin-suppliers.component.css'
})
export class AdminSuppliersComponent {
  suppliers = [
    {
      name: 'Aboubacar Sogoba',
      email: 'ab94640419@gmail.com',
      phone: '+223 92 11 30 06',
      status: 'pending' as const,
      active: true,
    },
    {
      name: 'Amadou Sogoba',
      email: 'ab94640419@gmail.com',
      phone: '+223 85 47 47 57',
      status: 'rejected' as const,
      active: false,
    },
    {
      name: 'Amadou Sogoba',
      email: 'ab94640419@gmail.com',
      phone: '+223 85 47 47 57',
      status: 'rejected' as const,
      active: false,
    },
    {
      name: 'Amadou Sogoba',
      email: 'ab94640419@gmail.com',
      phone: '+223 85 47 47 57',
      status: 'pending' as const,
      active: false,
    },
  ];

  toggleActive(supplier: { active: boolean }) {
    supplier.active = !supplier.active;
  }
}
