import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { DockModule } from 'primeng/dock';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { TagModule } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    SkeletonModule,
    DockModule,
    CarouselModule,
    MenubarModule,
    TagModule,
    GalleriaModule,
    InputNumberModule,
    InputTextModule,
    CardModule,
    RadioButtonModule,
    ProgressBarModule,
    ToastModule,
    ImageModule,
    RatingModule
  ]
})
export class PrimeNgModule { }
