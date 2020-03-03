import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class MetodosService {

  constructor(private fireauth: AngularFireAuth,
              private router: Router,
              private db: AngularFirestore  ) { }

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

  registro(email:string,password:string, nombre:string, telefono:string){
    return new Promise((resolve,rejected) =>{
      this.fireauth.auth.createUserWithEmailAndPassword(email,password).then( res =>{
       console.log(res.user.uid);
       this.db.collection('users').doc(res.user.uid).set({
         nombre:nombre,
         telefono:telefono,
         email:email,
         password:password
       })
       this.router.navigate(['/tabs/tab1'])
      }).catch(err => rejected (err))
    }) 
  }
}
