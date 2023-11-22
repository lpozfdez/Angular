import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage.component';
import { AboutPagesComponent } from './pages/aboutPage.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { RouterModule } from '@angular/router';
import { ContactPagesComponent } from './pages/contactPage.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPagesComponent,
    SideBarComponent,
    ContactPagesComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    AboutPagesComponent,
    SideBarComponent,
    ContactPagesComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
