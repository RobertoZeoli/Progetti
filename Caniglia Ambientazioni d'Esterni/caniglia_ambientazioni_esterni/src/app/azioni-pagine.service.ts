import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AzioniPagineService {

  constructor() { }

  inizioPagina(){
    window.scrollTo(0,0)
  }
}
