import { OrderStatus } from './enums/orderStatus';
import { Participation } from './participation';
import { Produits } from './produits';
import { Commercant } from './user';

export interface CommandeGroupee {
  id: number;
  montant: number;
  status: OrderStatus;
  quantiteRequis: number;
  quaniteActuelle: number;
  deadline: Date;
  produit: Produits;
  participation: Participation[];
  dateDebut: Date;
  commercant: Commercant;
}
