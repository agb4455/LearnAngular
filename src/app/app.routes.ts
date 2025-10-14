import { Routes } from '@angular/router';
import {MatatoposPage } from './pages/matatopos/matatopos';
import { Main } from './pages/main/main';
import { ContadorPage} from './pages/contador/contador';
import { SemaforoAutomaticoPage } from './pages/semaforo-automatico/semaforo-automatico';
import { CharacterListPage } from './pages/character-list-page/character-list-page';
import { EyeCandyPage } from './pages/eye-candy-page/eye-candy-page';
import { FormReactiveTest } from './components/form-reactive-test/form-reactive-test';
import { HalloweenPage } from './pages/halloween-page/halloween-page';

export const routes: Routes = [
    {path: 'main', component: Main},
    {path: 'matatopos', component: MatatoposPage},
    {path: 'contador', component: ContadorPage},
    {path: 'semaforoA', component: SemaforoAutomaticoPage},
    {path: 'characters', component: CharacterListPage},
    {path: 'eyeCandy' ,component: EyeCandyPage},
    {path: 'formTest', component: FormReactiveTest},
    {path: 'halloween', component: HalloweenPage},
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: '**', redirectTo:'/main'},
];
