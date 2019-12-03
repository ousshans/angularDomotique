import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectDomotiqueComponent } from './object-domotique/object-domotique.component';
import { DomotiqueObjectService } from './services/domotique-object.service';
import { AddObjectDomotiqueComponent } from './add-object-domotique/add-object-domotique.component';
import { FormsModule } from '@angular/forms';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { PaletteButtonComponent } from './palette-button/palette-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component'


@NgModule({
  declarations: [
    AppComponent,
    ObjectDomotiqueComponent,
    AddObjectDomotiqueComponent,
    ShowErrorsComponent,
    PaletteButtonComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DomotiqueObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
