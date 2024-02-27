import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChiSonoComponent } from './components/chi-sono/chi-sono.component';
import { ProgettiComponent } from './components/progetti/progetti.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { Error404Component } from './components/error404/error404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyitalyComponent } from './components/videocomponent/myitaly/myitaly.component';
import { CalculatorComponent } from './components/videocomponent/calculator/calculator.component';
import { DigitalMenuComponent } from './components/videocomponent/digital-menu/digital-menu.component';
import { SpotifyComponent } from './components/videocomponent/spotify/spotify.component';

const route: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chiSono',
    component: ChiSonoComponent
  },
  {
    path: 'progetti',
    component: ProgettiComponent,
    children: [
      {
        path: 'myitaly',
        component: MyitalyComponent,
      },
      {
        path: 'calculator',
        component: CalculatorComponent,
      },
      {
        path: 'digitalmenu',
        component: DigitalMenuComponent,
      },
      {
        path: 'spotify',
        component: SpotifyComponent,
      }
    ]
  },
  {
    path: 'contatti',
    component: ContattiComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'myitaly',
    component: MyitalyComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'digitalmenu',
    component: DigitalMenuComponent,
  }, {
    path: 'spotify',
    component: SpotifyComponent,
  },
  {
    path: '**',
    component: Error404Component,
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChiSonoComponent,
    ProgettiComponent,
    ContattiComponent,
    Error404Component,
    NavbarComponent,
    MyitalyComponent,
    CalculatorComponent,
    DigitalMenuComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
