import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { BibiteComponent } from './components/bibite/bibite.component';
import { DolciComponent } from './components/dolci/dolci.component';
import { PaniniComponent } from './components/panini/panini.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';

const route: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'carrello',
    component: CarrelloComponent,
  },
  {
    path: 'panini',
    component: PaniniComponent,
  },
  {
    path: 'bibite',
    component: BibiteComponent,
  },
  {
    path: 'dolci',
    component: DolciComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '404',
    component: Error404Component,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrelloComponent,
    BibiteComponent,
    DolciComponent,
    PaniniComponent,
    HomeComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
