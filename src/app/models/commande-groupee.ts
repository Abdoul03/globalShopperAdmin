export type OrderStatus = 'ENCOURS' | 'EXPEDIER' | 'TERMINER' | 'ANNULER';

export interface Pays { id: number; nom: string; }
export interface Categorie { id: number; nom: string; }
export interface Caracteristique { id: number; nom: string; valeur: string; }
export interface Media { id: number; fileName: string; fileType: string; filePath: string; webPath: string; }

export interface Commercant {
  id: number; nom: string; prenom: string; username: string;
  telephone: string; email: string; actif: boolean; photoUrl: string | null;
  pays: Pays | null; role: string;
}

export interface Fournisseur extends Commercant {}

export interface Produit {
  id: number; nom: string; description: string; prix: number; moq: number;
  stock: number; unite: string; categorie: Categorie | null;
  caracteristiques: Caracteristique[]; media: Media[];
  fournisseur: Fournisseur | null;
}

export interface Participation {
  id: number; commandeId: number; commercantResponseDTO: Commercant;
  data: string; quantite: number; montant: number; transaction: any;
}

export interface CommandeGroupee {
  id: number; montant: number; status: OrderStatus; quantiteRequis: number;
  quaniteActuelle: number; deadline: string; dateDebut: string;
  produit: Produit; participation: Participation[];
}
