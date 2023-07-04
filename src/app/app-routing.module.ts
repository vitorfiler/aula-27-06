import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'tela-inicial',
    loadChildren: () => import('./pages/tela-inicial/tela-inicial.module').then(m => m.TelaInicialModule)
  },
  {
    path: 'segunda-tela',
    loadChildren: () => import('./pages/segunda-tela/segunda-tela.module').then(m => m.SegundaTelaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
