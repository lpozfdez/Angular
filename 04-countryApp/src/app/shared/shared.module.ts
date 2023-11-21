import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage.component';
import { AboutPagesComponent } from './pages/aboutPages.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    AboutPagesComponent
  ]
})
export class SharedModule { }
