import { Component, OnInit, inject } from '@angular/core';
import { AutoCarService } from '../../services/auto-car.service';

@Component({
  selector: 'components-auto-available',
  templateUrl: './auto-available.component.html',
  styleUrl: './auto-available.component.css'
})
export class AutoAvailableComponent implements OnInit {
  products: any[] = [];
  responsiveOptions: any[] | undefined;
  public autoCarService: AutoCarService = inject(AutoCarService);
  public baseURlImg: string = 'assets/imgs/toyota';

  constructor() {}
  ngOnInit(): void {
    this.products = [{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  }];
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '991px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }

    ];

    this.autoCarService.getAllAutos().subscribe(cars => {
      this.products = cars;
      console.log(cars);

    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'unknown';
    }
  }

  onClick(card: string){
    alert('Click to');
    window.open('https://api.whatsapp.com/send?phone=1455323423', '_bank')?.focus();

  }
}
