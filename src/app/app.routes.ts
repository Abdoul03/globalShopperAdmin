import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSuppliersComponent } from './admin-suppliers/admin-suppliers.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminTransactionsComponent } from './admin-transactions/admin-transactions.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'fournisseurs',
        component: AdminSuppliersComponent,
      },
      {
        path: 'utilisateurs',
        component: AdminUsersComponent,
      },
      {
        path: 'produits',
        component: AdminProductsComponent,
      },
      {
        path: 'categories',
        component: AdminCategoriesComponent,
      },
      {
        path: 'commandes',
        component: AdminOrdersComponent,
      },
      {
        path: 'transactions',
        component: AdminTransactionsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
];
