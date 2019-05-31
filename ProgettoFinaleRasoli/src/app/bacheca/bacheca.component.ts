import { Component, OnInit, Input } from '@angular/core';
import {Commento} from '../commento';
import {DefAnnunci} from '../mock-annunci';
import {Annuncio} from '../Annuncio';
import {Utente} from '../user'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent implements OnInit {
  @Input() loggedUser : Utente;
  postForm : FormGroup;
  viviane : Annuncio[] = DefAnnunci;
  constructor(fb : FormBuilder) {
    this.postForm = fb.group(
      {
        titolo: ['', Validators.required],
        descrizione: ['', Validators.required]
      }
    )
  }
  addAnnuncio()
  {
    if(this.postForm.valid)
    {
      let d = new Date();
      let data = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
      let u = new Annuncio(this.loggedUser.username, data, this.postForm.controls['titolo'].value, 
      this.postForm.controls['descrizione'].value, new Array<Commento>());
      this.viviane.push(u);
    }
  }
  ngOnInit() {
  }

}
