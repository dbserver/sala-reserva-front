import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ReversaListagemComponent } from './../reserva/reversa-listagem/reversa-listagem.component';
import { ReniaoListagemComponent } from './../reuniao/reniao-listagem/reniao-listagem.component';

const appRoutes:Routes = [
    { path: 'reservas', component: ReversaListagemComponent},
    { path: 'reunioes', component: ReniaoListagemComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);