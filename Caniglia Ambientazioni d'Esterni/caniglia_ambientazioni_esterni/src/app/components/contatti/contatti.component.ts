import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AzioniPagineService } from 'src/app/azioni-pagine.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  endpoint: string = 'https://formspree.io/f/xvojljne';
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    messaggio: new FormControl('', Validators.required),
  });
  statusMessage: string = '';

  constructor(private http: HttpClient, private azioni: AzioniPagineService) { }

  ngOnInit(): void {
    this.azioni.inizioPagina()
  }

  submitForm() {
    if (this.form.valid) {
      this.http.post('https://formspree.io/f/xvojljne', this.form.value).subscribe(
        response => {
          // Gestisci la risposta del server qui
          console.log('Risposta dal server:', response);
          alert('Grazie per averci contattato, ti risponderemo il prima possibile!')
          this.statusMessage = 'Grazie per il tuo messaggio!';
          this.form.reset(); // Resetta il form dopo l'invio
        },
        error => {
          // Gestisci gli errori qui
          console.error('Errore durante l\'invio del form:', error);
          this.statusMessage = 'Errore durante l\'invio del form. Riprova più tardi.';
        }
      );
    } else {
      // Il form non è valido, mostra un messaggio di errore o fai qualche altra azione
      alert('Form non valido! Per favore compila correttamente i campi e inviaci il tuo messaggio');
      this.statusMessage = 'Per favore, compila tutti i campi del form correttamente.';
    }
  }
}
