import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Usuario } from './models/usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router, private http: HttpClient) {
    this.usuarioAutenticado = JSON.parse(localStorage.getItem('usuarioAutenticado'));

    this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
  }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === "usuario@email.com" &&
      usuario.senha === "123456") {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

    localStorage.setItem('usuarioAutenticado', JSON.stringify(this.usuarioAutenticado));
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
