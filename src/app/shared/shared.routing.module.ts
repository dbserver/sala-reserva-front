import { PaginaNaoEncontradaComponent } from './../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { LoginComponent } from './../login/login.component';
import { RegistroNaoEncontradoComponent } from './registro-nao-encontrado/registro-nao-encontrado.component';
import { AuthGuard } from './../guards/auth.guard';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'naoEncontrado', component: RegistroNaoEncontradoComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '404', component: PaginaNaoEncontradaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class SharedRoutingModule {

}
