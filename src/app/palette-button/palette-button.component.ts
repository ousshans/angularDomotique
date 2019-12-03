import { Component, OnInit } from '@angular/core';
import { DomotiqueObjectService } from '../services/domotique-object.service';

@Component({
  selector: 'app-palette-button',
  templateUrl: './palette-button.component.html',
  styleUrls: ['./palette-button.component.css']
})
export class PaletteButtonComponent implements OnInit {

  constructor(private o : DomotiqueObjectService) { }

  ngOnInit() {
  }


  allumerTout(){
    this.o.allumerTout();
  }

  eteindrett(){
    this.o.eteindreTout();
  }

  connectertt(){
    this.o.connecterTout()
}

  deconnectertt(){
    this.o.deconnecterTout()
  }

  ajouter(){
    this.o.ajouterForm()
  }






}
