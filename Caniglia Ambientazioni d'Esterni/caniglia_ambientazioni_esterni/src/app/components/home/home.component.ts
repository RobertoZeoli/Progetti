import { Component, OnInit } from '@angular/core';
import { AzioniPagineService } from 'src/app/azioni-pagine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroBackground: string[] = [
    '/assets/img/hero1.jpg',
    '/assets/img/hero2.jpg',
    '/assets/img/hero3.jpg'

  ];

  currentHero = 0;

  constructor(private azioni: AzioniPagineService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.changeHero()
    }, 5000);
    this.azioni.inizioPagina()
  }

  changeHero() {
    /* const randomIndex = Math.floor(Math.random() * this.heroBackground.length);
    this.currentHero = randomIndex; */
    this.currentHero = (this.currentHero + 1) % this.heroBackground.length;
  }
}
