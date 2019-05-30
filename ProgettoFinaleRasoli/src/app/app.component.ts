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
  loggedUser: Utente = null;
  showLogin : Boolean = false;
  showReg : Boolean = false;
  constructor()
  {

  }
  triggerReg()
  {
    this.showReg = !this.showReg;
    this.showLogin = false;
  }
  triggerLogin()
  {
    this.showLogin = !this.showLogin;
    this.showReg = false;
  }
  setUtenteLoggato(index : number)
  {
    this.loggedUser = this.utenti[index];
  }
  stampaUtenteLoggato()
  {
    console.log(this.loggedUser);
  }
}
