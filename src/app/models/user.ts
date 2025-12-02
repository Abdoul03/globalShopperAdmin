import { Role } from 'react-native';

export interface Fournisseur {
  id: number;
  nom: string;
  prenom: string;
  username: string;
  email: string;
  telephone: string;
  actif: boolean;
  photoUrl: string;
  role: Role;
}
export interface Commercant {
  id: number;
  nom: string;
  prenom: string;
  username: string;
  email: string;
  telephone: string;
  actif: boolean;
  photoUrl: string;
  role: Role;
}
