import { Component, OnInit } from '@angular/core';
import { Dolce } from 'src/app/models/dolce';
import { PaniniService } from 'src/app/services/panini.service';
import { HttpClient } from '@angular/common/http';
import { Ordinato } from 'src/app/models/ordinato';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-dolci',
  templateUrl: './dolci.component.html',
  styleUrls: ['./dolci.component.scss']
})
export class DolciComponent implements OnInit {

  dolci!: Dolce[];
  ordine!: Ordinato;

  constructor(private http: HttpClient, private paniniSrv: PaniniService) { }

  ngOnInit(): void {
    this.recuperaDolci();
  }

  recuperaDolci() {
    this.paniniSrv.recuperaDolci().subscribe((dolci: Dolce[]) => {
      this.dolci = dolci;
    });

  }

  aggiungiOrdine(ordinato: Dolce) {
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

