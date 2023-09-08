import { Injectable } from '@angular/core';
import { Panino } from '../models/panino';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Bevanda } from '../models/bevanda';
import { Dolce } from '../models/dolce';
import { Ordinato } from '../models/ordinato';

@Injectable({
  providedIn: 'root'
})
export class PaniniService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  recuperaPanini() {
    return this.http.get<Panino[]>(`${this.baseUrl}panini`)
  }

  recuperaBibite() {
    return this.http.get<Bevanda[]>(`${this.baseUrl}bibite`)
  }

  recuperaDolci() {
    return this.http.get<Dolce[]>(`${this.baseUrl}dolci`)
  }

  aggiungi(ordinato: Ordinato) {
    return this.http.post<Ordinato>(`${this.baseUrl}ordine`, ordinato)
  }

  recuperaOrdine() {
    return this.http.get<Panino[] | Bevanda[] | Dolce[]>(`${this.baseUrl}ordine`)
  }

  /* cancellaOrdine(ordinato: Ordinato) {
    return this.http.delete(`${this.baseUrl}ordine`, ordinato)
  } */
}
