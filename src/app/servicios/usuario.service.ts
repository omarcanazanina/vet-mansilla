import { Injectable } from '@angular/core';
import { MetodosService } from './metodos.service';
import { Observable } from 'rxjs';
export interface Usuario{
  nombre?:string
  telefono?:string
  email?:string
  rol?:string
  estado?:boolean
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private metodoService:MetodosService
  ) { }
  listarEmpleados(rol):Observable<Usuario[]> {
    let query=res=>res.where("rol","==",rol)
    return this.metodoService.getcollArrayconkey('users',query)
  }
}
