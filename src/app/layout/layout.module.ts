import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LayoutMainComponent
  ],
  imports: [
    PrimeNgModule,
    ComponentsModule

  ],
  exports: [LayoutMainComponent]
})
export class LayoutModule { }
