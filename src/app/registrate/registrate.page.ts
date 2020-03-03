import { Component, OnInit } from '@angular/core';
import { MetodosService } from '../servicios/metodos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.page.html',
  styleUrls: ['./registrate.page.scss'],
})
export class RegistratePage implements OnInit {
  email:string
  password:string
  nombre:string
  telefono:string
  constructor( private metodos:MetodosService,private router:Router) { }

  ngOnInit() {
  }

  registrate(){
    
    this.metodos.registro(this.email,this.password,this.nombre,this.telefono).then(res =>{
      this.router.navigate(['/tabs/tab1'])
      
    }).catch(err=> console.log(err));
  }

}