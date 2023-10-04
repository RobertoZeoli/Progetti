import { Component, OnInit } from '@angular/core';
import { PaniniService } from 'src/app/services/panini.service';
import { Ordinato } from 'src/app/models/ordinato';
import { HttpClient } from '@angular/common/http';
import { Panino } from 'src/app/models/panino';
import { Dolce } from 'src/app/models/dolce';
import { Bevanda } from 'src/app/models/bevanda';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  carrello!: any;
  eliminato!: Ordinato | null;
  showMessage: boolean = false;

  constructor(private paniniSrv: PaniniService, private http: HttpClient) { }

  ngOnInit(): void {
    this.ordine();
  }

  ordine() {
    this.paniniSrv.recuperaOrdine().subscribe((ordine: Panino[] | Bevanda[] | Dolce[]) => {
      this.carrello = ordine;
      console.log(this.carrello)
    })
  }

  eliminaOrdine(ordinato: Ordinato) {
    const idOrdine: number | undefined = ordinato.id;
    if (idOrdine !== undefined) {
      this.paniniSrv.cancellaOrdine(idOrdine).subscribe((item) =>
        this.eliminato = item

      )
      location.reload();
    }
  }

  /* svuotaCarrello() {
    this.paniniSrv.svuotaCarrello().subscribe(() => {
      this.eliminato = null;
    })
  } */

  calcolaTotale() {
    return this.carrello.reduce((acc: any, oggetto: { price: any; }) => acc + oggetto.price, 0)
  }

  showSuccessMessage() {
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 2500);
  }
}
