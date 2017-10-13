import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ReservaFormularioComponent } from './../reserva/reserva-formulario/reserva-formulario.component';
import { ReversaListagemComponent } from './../reserva/reversa-listagem/reversa-listagem.component';

const appRoutes:Routes = [
    { path: 'reservas' , component: ReversaListagemComponent  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);