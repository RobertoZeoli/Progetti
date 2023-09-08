import { Component, OnInit } from '@angular/core';
import { PaniniService } from 'src/app/services/panini.service';
import { HttpClient } from '@angular/common/http';
import { Bevanda } from 'src/app/models/bevanda';
import { Ordinato } from 'src/app/models/ordinato';

@Component({
  selector: 'app-bibite',
  templateUrl: './bibite.component.html',
  styleUrls: ['./bibite.component.scss']
})
export class BibiteComponent implements OnInit {

  bibite!: any;
  ordine!: Ordinato;

  constructor(private http: HttpClient, private paniniSrv: PaniniService) { }

  ngOnInit(): void {
    this.recuperaBibite();
  }

  recuperaBibite() {
    this.paniniSrv.recuperaBibite().subscribe((bibite: Bevanda[]) => {
      this.bibite = bibite;
    });
  }

  aggiungiOrdine(ordinato: Bevanda) {
    const ordine: Ordinato = {
      image: ordinato.image,
      name: ordinato.name,
      price: ordinato.price
    }
    this.paniniSrv.aggiungi(ordine).subscribe((newOrdine) => {
      this.ordine = newOrdine;
    })
    console.log(ordinato);
  }
}
