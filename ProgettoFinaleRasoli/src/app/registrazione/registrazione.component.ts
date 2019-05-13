import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  reg : FormGroup;
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

  ngOnInit() {
  }

}
