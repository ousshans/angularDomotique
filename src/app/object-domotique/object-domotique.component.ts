import { Component, OnInit } from '@angular/core';
import { DomotiqueObjectService } from '../services/domotique-object.service';
import { Domotique } from '../shared/models/Domotique.model';

@Component({
  selector: 'app-object-domotique',
  templateUrl: './object-domotique.component.html',
  styleUrls: ['./object-domotique.component.css']
})
export class ObjectDomotiqueComponent implements OnInit {

  id : number;
  nomDObject : string;
  emplacementDobject : string;
  statusDobjet : boolean;
  estConnecter : boolean;

  test : boolean = false;

  domos : Domotique[];


  constructor(private o : DomotiqueObjectService) { }

  ngOnInit() {

    this.domos = this.o.getAllObjects();
  }

  allumer(id:number){
   this.o.allumerUn(id)

  }

  eteindre(id:number){
    this.o.eteindreUn(id);
  }



  connecter(id:number){
    this.o.conecterUn(id)
  }

  deconnecter(id:number){
    this.o.deconnecterUn(id)
  }





}
