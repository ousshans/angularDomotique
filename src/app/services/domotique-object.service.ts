import { Injectable } from '@angular/core';
import { Domotique } from '../shared/models/Domotique.model';

@Injectable({
  providedIn: 'root'
})
export class DomotiqueObjectService {

  domotiques : Domotique[] = [
    {id : 1 ,emplacementDobject : "salon" , estConnecter : true , nomDObject : "tv" , statusDobjet : true},
    {id : 2 ,emplacementDobject : "salon" , estConnecter : false , nomDObject : "frigo" , statusDobjet : false},
  ]

  valider : boolean = false
  ajoutF : boolean = false




  allumerTout(){
    this.initialiser();
    this.domotiques.forEach(x => {

      if(x.estConnecter==false){
        this.valider=true;
      }
      else{
        x.statusDobjet = true
      }
    });
  }

  initialiser(){
    this.valider = false;
    this.ajoutF = false;
  }

  eteindreTout(){
    this.initialiser();
    this.domotiques.forEach(x =>{
      if(x.estConnecter==false){
        this.valider=true;
      }
      else{
        x.statusDobjet = false
      }
    })
  }

  connecterTout(){
    this.initialiser();
      this.domotiques.forEach(x=>{
        x.estConnecter = true;
      })
  }




  deconnecterTout(){
    this.initialiser();
      this.domotiques.forEach(x=>{
        x.estConnecter = false;
      })
  }

  allumerUn(id:number){
    this.initialiser();
      var x = this.domotiques[id-1].estConnecter
      if(!x){
        this.valider = true;
      }
      else this.domotiques[id-1].statusDobjet = true;


  }
  eteindreUn(id:number){
    this.initialiser();
    var x = this.domotiques[id-1].estConnecter
    if(!x) this.valider = true;
      else
      this.domotiques[id-1].statusDobjet = false;
  }

  conecterUn(id:number){
    this.domotiques[id-1].estConnecter = true;
  }
  deconnecterUn(id:number){
    this.domotiques[id-1].estConnecter = false;
  }


  getAllObjects(){
    return this.domotiques
  }

  addObject(x : Domotique){
    x.statusDobjet = false;
    x.id = this.generateId()
    this.domotiques.push(x);
  }

  generateId(){
    return this.domotiques.length+1
  }

  ajouterForm(){
    if(this.ajoutF == false)
    this.ajoutF = true
    else this.ajoutF = false
  }

  getObject(id : number) : Domotique{

    for(const o of this.domotiques){
      if(o.id===id){
        return o;
      }
    }
  }




  constructor() { }
}
