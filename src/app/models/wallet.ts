import { Status } from './enums/status';
import { Transaction } from './transaction';

export interface wallet {
  id: number;
  montant: number;
  miseAjour: Date;
  statut: Status;
  transactions: Transaction[];
  numero: string;
}
