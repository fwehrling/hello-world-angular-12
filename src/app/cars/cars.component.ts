import { Component, OnInit } from '@angular/core';
import { Carburant } from '../shared/carburant';
import { Casse } from '../shared/casse';
import { Espace } from '../shared/espace';
import { Car } from '../shared/interfaces/car';

@Component({
  selector: 'hlw-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  carburants: any = Carburant;
  carburant: Carburant = Carburant.Diesel;
  myCar!: Car | null;
  espace: any = Espace;
  casse: any = Casse;

  constructor() {}

  ngOnInit(): void {
    this.carburants = Object.keys(this.carburants)
      .filter((e: string) => !isNaN(+e))
      .map((e: string) => {
        return { index: e, libelle: Carburant[+e] };
      });
  }

  onChangeCarburant(carburant: number): void {
    this.carburant = carburant as Carburant;
  }

  checkCarburant(carburant: number): string {
    return Carburant[carburant];
  }

  createCar(
    marque: string,
    couleur: string,
    nbPlace: number,
    nbPorte: number
  ): void {
    const car: Car = {
      marque,
      couleur,
      carburant: this.carburant,
      nbPlace,
      nbPorte,
    };

    this.cars.push(car);
  }

  removeCar(i: number): void {
    this.cars.splice(i, 1);
  }

  showCar(i: number): void {
    this.myCar = this.cars[i];
    setTimeout(() => (this.myCar = null), 5000);
  }

  getCarburant(index: number): string {
    return Carburant[index];
  }
}
