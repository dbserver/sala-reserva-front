import { ApplicationHttpInterceptor } from './application-http.interceptor';
import { RouterModule , Router} from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { ReservaModule } from './reserva/reserva.module';
import { ReuniaoModule } from './reuniao/reuniao.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    // Modulos do angular
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

    // Modulos da aplicação
    ReservaModule,
    ReuniaoModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApplicationHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
