import { Routes } from '@angular/router';
import {MatatoposPage } from './pages/matatopos/matatopos';
import { Main } from './pages/main/main';
import { ContadorPage} from './pages/contador/contador';
import { SemaforoAutomaticoPage } from './pages/semaforo-automatico/semaforo-automatico';

export const routes: Routes = [
    {path: 'main', component: Main},
    {path: 'matatopos', component: MatatoposPage},
    {path: 'contador', component: ContadorPage},
    {path: 'semaforoA', component: SemaforoAutomaticoPage},
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: '**', redirectTo:'/main'},
];
