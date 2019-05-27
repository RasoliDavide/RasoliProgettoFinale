import { Component, OnInit } from '@angular/core';
import {Utente} from './user';
import {DefUtenti} from './mock-utenti';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgettoFinaleRasoli';
  utenti : Utente[] = DefUtenti;
  constructor()
  {
  }
}
