import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MetodosService {

  constructor(private fireauth: AngularFireAuth, private router: Router ) { }

  login(email, password) {
    return new Promise((resolve, rejected) => {
      this.fireauth.auth.signInWithEmailAndPassword(email, password).then(res => {
        resolve(rejected)
      }).catch(err => rejected(err))
    })
  }

  cerrarsesion(){
    this.fireauth.auth.signOut().then(res =>{
      this.router.navigate(['/login'])
    })
  }
}
