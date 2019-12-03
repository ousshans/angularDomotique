import { Component, OnInit } from '@angular/core';
import { DomotiqueObjectService } from '../services/domotique-object.service';
import { ActivatedRoute } from '@angular/router';
import { Domotique } from '../shared/models/Domotique.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {



  selected : Domotique = new Domotique()

  constructor(private s:DomotiqueObjectService,private routeActivee : ActivatedRoute) { }

  ngOnInit() {
    const idp = this.routeActivee.snapshot.params['id'];
    console.log(this.s.getObject(idp));
    this.selected.nomDObject = this.s.getObject(+idp).nomDObject;
    this.selected.statusDobjet = this.s.getObject(+idp).statusDobjet;
  }

}
