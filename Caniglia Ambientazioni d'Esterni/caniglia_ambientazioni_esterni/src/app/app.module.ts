import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { ServiziComponent } from './components/servizi/servizi.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WoodComponent } from './components/wood/wood.component';
import { ParchiEgiardiniComponent } from './components/parchi-egiardini/parchi-egiardini.component';
import { LavoriComponent } from './components/lavori/lavori.component';

const route: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'lavori',
        component: LavoriComponent
      },
      {
        path: 'chiSiamo',
        component: ChiSiamoComponent
      }
    ]
  },
  {
    path: 'chiSiamo',
    component: ChiSiamoComponent
  },
  {
    path: 'servizi',
    component: ServiziComponent,
    children: [
      {
        path: 'parchiEgiardini',
        component: ParchiEgiardiniComponent
      },
      {
        path: 'wood',
        component: WoodComponent
      }
    ]
  },
  {
    path: 'parchiEgiardini',
    component: ParchiEgiardiniComponent
  },
  {
    path: 'wood',
    component: WoodComponent
  },
  {
    path: 'lavori',
    component: LavoriComponent
  },
  {
    path: 'contatti',
    component: ContattiComponent
  },
  {
    path: 'privacyPolici',
    component: PrivacyPolicyComponent
  },
  {
    path: '**',
    component: Error404Component
  }
]


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HomeComponent,
    ChiSiamoComponent,
    ServiziComponent,
    ContattiComponent,
    PrivacyPolicyComponent,
    NavbarComponent,
    FooterComponent,
    WoodComponent,
    ParchiEgiardiniComponent,
    LavoriComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
