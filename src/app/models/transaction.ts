import { CompteFourisseur } from './compteFournisseur';
import { MethodeDePayement } from './enums/methodeDePayement';
import { Status } from './enums/status';
import { TransactionType } from './enums/transactionType';
import { Participation } from './participation';
import { wallet } from './wallet';

export interface Transaction {
  id: number;
  montant: number;
  transactionType: TransactionType;
  methodeDePayement: MethodeDePayement;
  date: Date;
  participation: Participation;
  wallet: wallet;
  compteFourisseur: CompteFourisseur;
  statut: Status;
}
