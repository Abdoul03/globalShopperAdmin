import { CommandeGroupee } from './commandeGroupee';
import { Transaction } from './transaction';
import { Commercant } from './user';

export interface Participation {
  id: number;
  commercant: Commercant;
  commandeGroupee: CommandeGroupee;
  data: Date;
  quantite: number;
  montant: number;
  transaction: Transaction;
}
