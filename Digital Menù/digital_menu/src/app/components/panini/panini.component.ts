import { Component, OnInit } from '@angular/core';
import { Panino } from 'src/app/models/panino';
import { PaniniService } from 'src/app/services/panini.service';
import { HttpClient } from '@angular/common/http';
import { Ordinato } from 'src/app/models/ordinato';

@Component({
  selector: 'app-panini',
  templateUrl: './panini.component.html',
  styleUrls: ['./panini.component.scss']
})
export class PaniniComponent implements OnInit {

  panini!: Panino[];
  ordine!: Ordinato;

  constructor(private http: HttpClient, private paniniSrv: PaniniService) { }


  ngOnInit(): void {
    this.recuperaPanini()
  }

  recuperaPanini() {
    this.paniniSrv.recuperaPanini().subscribe((panini: Panino[]) => {
      this.panini = panini;
    });
  }

  aggiungiOrdine(ordinato: Panino) {
    const ordine: Ordinato = {
      image: ordinato.image,
      name: ordinato.name,
      desc: ordinato.desc,
      price: ordinato.price
    }
    this.paniniSrv.aggiungi(ordine).subscribe((newOrdine) => {
      this.ordine = newOrdine;
    })
    console.log(ordinato);
  }

  /* aggiungiOrdine() {
    this.paniniSrv.aggiungi().subscribe(() => {
      this.
    })
  } */


  /* aggiungi(panino: Panino) {
    this.carrello.push(panino);
    console.log(this.carrello)
  } */

}
