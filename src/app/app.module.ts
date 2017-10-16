import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ReversaListagemComponent } from './reserva/reversa-listagem/reversa-listagem.component';
import { ReservaFormularioComponent } from './reserva/reserva-formulario/reserva-formulario.component';
import { ReniaoListagemComponent } from './reuniao/reniao-listagem/reniao-listagem.component';
import { ReservaModule } from './reserva/reserva.module';
import { routing } from './shared/app.routing';
import { ReuniaoModule } from './reuniao/reuniao.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReservaModule,
    ReuniaoModule,
    SharedModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
