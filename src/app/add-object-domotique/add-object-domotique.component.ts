import { Component, OnInit } from '@angular/core';
import { DomotiqueObjectService } from '../services/domotique-object.service';
import { Domotique } from '../shared/models/Domotique.model';

@Component({
  selector: 'app-add-object-domotique',
  templateUrl: './add-object-domotique.component.html',
  styleUrls: ['./add-object-domotique.component.css']
})
export class AddObjectDomotiqueComponent implements OnInit {

  valider = false

  constructor(private o : DomotiqueObjectService) { }

  ngOnInit() {
  }

  onSubmit(f){
    var xx : Domotique = {id : 1,nomDObject : f.nomDObject , statusDobjet : f.statusDobjet , emplacementDobject : f.emplacementDobject , estConnecter : false};
    this.o.addObject(xx);
    this.valider = true
    this.o.ajouterForm()
  }

  getOpen(){
    return this.o.ajoutF
  }

}
