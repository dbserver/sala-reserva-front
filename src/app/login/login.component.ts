import { Usuario } from './models/usuario';
import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }

}
