import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegundaTelaComponent } from './segunda-tela.component';

const routes: Routes = [
  {path:'', component: SegundaTelaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegundaTelaRoutingModule { }
