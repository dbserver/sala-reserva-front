import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mostrarMenu = false;

  constructor(private authService: AuthService) {
    this.mostrarMenu = JSON.parse(localStorage.getItem('usuarioAutenticado'));
  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(mostrar => this.mostrarMenu = mostrar);
  }

}
