import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-transactions.component.html',
  styleUrl: './admin-transactions.component.css'
})
export class AdminTransactionsComponent {
  transactions = [
    {
      id: 'Tx-441',
      date: '25/09/1998',
      merchant: 'Djibril',
      supplier: 'Aboubacar',
      amount: '250 000',
      status: 'pending' as const,
    },
    {
      id: 'Tx-441',
      date: '25/09/1998',
      merchant: 'Djibril',
      supplier: 'Aboubacar',
      amount: '250 000',
      status: 'pending' as const,
    },
    {
      id: 'Tx-441',
      date: '25/09/1998',
      merchant: 'Djibril',
      supplier: 'Aboubacar',
      amount: '250 000',
      status: 'pending' as const,
    },
    {
      id: 'Tx-441',
      date: '25/09/1998',
      merchant: 'Djibril',
      supplier: 'Aboubacar',
      amount: '250 000',
      status: 'pending' as const,
    },
    {
      id: 'Tx-441',
      date: '25/09/1998',
      merchant: 'Djibril',
      supplier: 'Aboubacar',
      amount: '250 000',
      status: 'pending' as const,
    },
  ];
}
