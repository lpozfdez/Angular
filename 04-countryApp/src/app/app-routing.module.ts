import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/homePage.component';
import { AboutPagesComponent } from './shared/pages/aboutPages.component';

  const routes: Routes = [
    {
      path: 'home',
      component: HomePageComponent
    },
    {
      path: 'about',
      component: AboutPagesComponent
    },
    {
      path: '**',
      redirectTo: 'home'
    }

  ];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
