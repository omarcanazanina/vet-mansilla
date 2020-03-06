import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FabricasService {

  constructor(private fireauth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore) { }


    
}
