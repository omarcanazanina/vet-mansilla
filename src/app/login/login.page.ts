import { Component, OnInit } from '@angular/core';
import {MetodosService} from '../../app/servicios/metodos.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string
  password:string
  constructor( private metodos :MetodosService,
                private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.metodos.login(this.email,this.password).then( res=>{
      this.router.navigate(['/tabs/tab1'])
    }).catch(err => alert('datos incorrectos'))
  }

  registro(){
    this.router.navigate(['/registrate'])
  }

}
