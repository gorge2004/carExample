import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HeroComponent } from './hero/hero.component';
import { RecommedationSectionComponent } from './recommedation-section/recommedation-section.component';
import { InstagramCardComponent } from './instagram-card/instagram-card.component';
import {  HttpClientModule } from '@angular/common/http';
import { AutoAvailableComponent } from './auto-available/auto-available.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MenuComponent, HeroComponent, RecommedationSectionComponent, InstagramCardComponent, AutoAvailableComponent, ContactFormComponent],
  imports: [
    PrimeNgModule,

    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [MenuComponent,HeroComponent, RecommedationSectionComponent, InstagramCardComponent, AutoAvailableComponent, ContactFormComponent],
})
export class ComponentsModule { }
