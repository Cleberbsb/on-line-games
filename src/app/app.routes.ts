import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [

    { path: 'inicio', component: InicioComponent},
    { path: 'login', component: LoginComponent },
    {path:'', redirectTo: '/inicio', pathMatch:'full'},
];


export const routes: Routes = [];
