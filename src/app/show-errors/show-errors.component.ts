import { Component, OnInit } from '@angular/core';
import { DomotiqueObjectService } from '../services/domotique-object.service';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {


  valider : boolean = false
  error : string = "error"

  constructor(private o : DomotiqueObjectService) {

  }

  ngOnInit() {
    this.valider = this.o.valider
  }


  getError(){
    this.valider = this.o.valider
    return this.o.valider
  }







}
