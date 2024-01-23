import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { InstagramService } from '../../services/instagram.service';
import { Galleria } from 'primeng/galleria';

@Component({
  selector: 'components-recommedation-section',
  templateUrl: './recommedation-section.component.html',
  styleUrl: './recommedation-section.component.css',
})
export class RecommedationSectionComponent implements OnInit {


  rating: number = 5;

  products: any[] = [];
  private intagramService: InstagramService = inject(InstagramService);
  images: any[] = [];

  showThumbnails: boolean | undefined = false;

  fullscreen: boolean = false;

  activeIndex: number = 0;

  onFullScreenListener: any;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  public cd: any;
  ngOnInit() {
    this.intagramService
      .getImages()
      .subscribe((images) => (this.images = images));
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
        return 'success';
    }
  }
}
