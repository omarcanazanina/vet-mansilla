import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface linea {
  id:string;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class LineasService {

  constructor(private db: AngularFirestore,
    public fire: AngularFirestore) { }

  recuperalineas(id) {
    return this.db.collection('/fabrica/'+id+'/linea').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as linea;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  recuperaunalinea1(nombre,id): Observable<any> {
    var query = ref => ref.where('nombre', '==', nombre)
    return this.fire.collection('/fabrica/' +id+"/linea", query).valueChanges()
  }


  recuperaunalinea(nombre, id): Observable<any> {
    var query = ref => ref.where('nombre', '==', nombre)
    return this.fire.collection('/user/' + id + '/linea', query).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as linea;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

}
