import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ReservaFormularioComponent } from './reserva-formulario/reserva-formulario.component';
import { ReversaListagemComponent } from './reversa-listagem/reversa-listagem.component';
import { AuthGuard } from './../guards/auth.guard';

const appRoutes:Routes = [
    { path: 'reservas', component: ReversaListagemComponent, canActivate: [AuthGuard]},
    { path: 'reserva/:id', component: ReservaFormularioComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})
export class ReservaRoutingModule {

}