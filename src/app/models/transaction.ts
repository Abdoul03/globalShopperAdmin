import { CompteFourisseur } from './compteFournisseur';
import { MethodeDePayement } from './enums/methodeDePayement';
import { Status } from './enums/status';
import { TransactionType } from './enums/transactionType';
import { Participations } from './participation';
import { wallet } from './wallet';

export interface Transaction {
  id: number;
  montant: number;
  transactionType: TransactionType;
  methodeDePayement: MethodeDePayement;
  date: Date;
  participation: Participations;
  wallet: wallet;
  compteFourisseur: CompteFourisseur;
  statut: Status;
}
