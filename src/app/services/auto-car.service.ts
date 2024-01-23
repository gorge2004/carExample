import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { car } from '../interfaces/car';

@Injectable({
  providedIn: 'root',
})
export class AutoCarService {
  constructor() {}

  public getAllAutos(): Observable<car[]> {
    return of([
      {
        title: '2024 Tundra',
        year: 2024,
        price: 70000,
        condition: 'new',
        imgs: [
          'tundra/TUN_1.jpeg',
          'tundra/TUN_2.jpeg',
          'tundra/TUN_3.jpeg',
          'tundra/TUN_4.jpeg',
          'tundra/TUN_5.jpeg',
        ],
      },
      {
        title: '2024 Corolla',
        year: 2024,
        price: 22500,
        condition: 'new',
        imgs: [
          'corolla/corolla_1.jpeg',
          'corolla/corolla_2.jpeg',
          'corolla/corolla_3.jpeg',
          'corolla/corolla_4.jpeg',
          'corolla/corolla_5.jpeg',
        ],
      },
      {
        title: '2024 Camry',
        year: 2024,
        price: 26400,
        condition: 'new',
        imgs: [
          'camry/camry_1.jpeg',
          'camry/camry_2.jpeg',
          'camry/camry_3.jpeg',
          'camry/camry_4.jpeg',
          'camry/camry_5.jpeg',
        ],
      },
      {
        title: '2024 Corolla Cross',
        year: 2024,
        price: 23610,
        condition: 'new',
        imgs: [
          'corolla_cross/corolla_cross_1.jpeg',
          'corolla_cross/corolla_cross_2.jpeg',
          'corolla_cross/corolla_cross_3.jpeg',
          'corolla_cross/corolla_cross_4.jpeg',
          'corolla_cross/corolla_cross_5.jpeg',

        ],
      },
      {
        title: '2024 Tacoma',
        year: 2024,
        price: 31500,
        condition: 'new',
        imgs: [
          'tacoma/tacoma_1.jpeg',
          'tacoma/tacoma_2.jpeg',
          'tacoma/tacoma_3.jpeg',
          'tacoma/tacoma_4.jpeg',
          'tacoma/tacoma_5.jpeg',

        ],
      },
    ]);
  }
}
