import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { RegistroNaoEncontradoComponent } from './shared/registro-nao-encontrado/registro-nao-encontrado.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes:Routes = [
    { path: '', component: HomeComponent,  canActivate: [AuthGuard]} ,
    { path: 'naoEncontrado', component: RegistroNaoEncontradoComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}