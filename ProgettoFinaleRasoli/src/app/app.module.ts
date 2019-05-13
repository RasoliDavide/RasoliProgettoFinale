import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {   
  FormsModule,
  ReactiveFormsModule
 } from '@angular/forms';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
