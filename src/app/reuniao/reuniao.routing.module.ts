import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ReuniaoFormularioComponent } from './reuniao-formulario/reuniao-formulario.component';
import { ReniaoListagemComponent } from './reniao-listagem/reniao-listagem.component';
import { AuthGuard } from './../guards/auth.guard';

const appRoutes:Routes = [
    { path: 'reunioes', component: ReniaoListagemComponent, canActivate: [AuthGuard]},
    { path: 'reuniao/:id', component: ReuniaoFormularioComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})
export class ReuniaoRoutingModule {

}