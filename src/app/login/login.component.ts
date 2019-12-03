import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onSubmit(f){
    console.log(f)
    if(f.email == "admin" && f.password == "admin")
    this.route.navigateByUrl('home')
  }

}
