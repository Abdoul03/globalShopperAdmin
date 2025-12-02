import { caracteristiques } from './caracteristique';
import { Categorie } from './categorie';
import { CommandeGroupee } from './commandeGroupee';
import { Unite } from './enums/unite';
import { Media } from './media';
import { Fournisseur } from './user';

export interface Produits {
  id: number;
  nom: string;
  description: string;
  prix: number;
  moq: number;
  stock: number;
  uniteProduit: Unite;
  categorie: Categorie;
  caracteristiques: caracteristiques[];
  media: Media[];
  fournisseur: Fournisseur;
  commandeGroupees: CommandeGroupee[];
}
