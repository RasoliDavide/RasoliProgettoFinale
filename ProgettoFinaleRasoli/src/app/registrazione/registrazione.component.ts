import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Utente} from '../user';
@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  reg : FormGroup;
  @Input() utenti : Utente[];
  constructor(fb : FormBuilder) {
    this.reg = fb.group(
      {
        nome : ['', Validators.required],
        cognome : ['', Validators.required],
        username : [''],
        password : ['', Validators.required],
        email : ['', [Validators.required, Validators.email]]
      }
    )
    
   }
   addUser()
   {
     if(this.reg.valid)
     {
       if(this.reg.controls['username'].value == "")
       {
         this.reg.controls['username'].setValue(this.reg.controls['nome'].value+this.reg.controls['cognome'].value)
       }
       this.utenti.push(new Utente(this.reg.controls['username'].value,this.reg.controls['password'].value,
                        this.reg.controls['email'].value,this.reg.controls['nome'].value,this.reg.controls['cognome'].value,));
     }
   }
  ngOnInit() {
  }

}
