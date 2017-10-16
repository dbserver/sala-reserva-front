import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ReversaListagemComponent } from './../reserva/reversa-listagem/reversa-listagem.component';
import { ReservaFormularioComponent } from './../reserva/reserva-formulario/reserva-formulario.component';
import { ReniaoListagemComponent } from './../reuniao/reniao-listagem/reniao-listagem.component';
import { ReuniaoFormularioComponent } from './../reuniao/reuniao-formulario/reuniao-formulario.component';

const appRoutes:Routes = [
    { path: 'reservas', component: ReversaListagemComponent},
    { path: 'reserva/:id', component: ReservaFormularioComponent},
    { path: 'reunioes', component: ReniaoListagemComponent},
    { path: 'reunioe/:id', component: ReuniaoFormularioComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);