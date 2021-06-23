import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  getCars(): any[] {
    return [
      { marque: 'Renault', couleur: 'rouge' },
      { marque: 'Peugeot', couleur: 'orange' },
      { marque: 'Nissan', couleur: 'bleu' },
      { marque: 'Toyota', couleur: 'blanc' },
    ];
  }
}
