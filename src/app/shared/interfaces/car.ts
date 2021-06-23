import { Carburant } from '../carburant';

export interface Car {
  marque: string;
  couleur: string;
  carburant: Carburant;
  nbPlace: number;
  nbPorte: number;
}
