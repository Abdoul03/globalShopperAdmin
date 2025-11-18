import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css'
})
export class AdminOrdersComponent {
  groupedOrders = [
    {
      id: '#RP-1021',
      product: "cartons d'emballage 50 x 50",
      moq: 100,
      reserved: 70,
      progress: 70,
      deadline: '25/10/2025',
      status: 'in_progress' as const,
    },
    {
      id: '#RP-1022',
      product: 'Power banks 10 000 Ah',
      moq: 100,
      reserved: 70,
      progress: 45,
      deadline: '25/10/2025',
      status: 'pending' as const,
    },
    {
      id: '#RP-1023',
      product: 'Power banks 10 000 Ah',
      moq: 150,
      reserved: 70,
      progress: 30,
      deadline: '25/10/2025',
      status: 'in_progress' as const,
    },
    {
      id: '#RP-1024',
      product: 'Power banks 10 000 Ah',
      moq: 500,
      reserved: 70,
      progress: 80,
      deadline: '25/10/2025',
      status: 'pending' as const,
    },
  ];
}
