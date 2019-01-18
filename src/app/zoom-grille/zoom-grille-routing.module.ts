import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrilleComponent } from './grille/grille.component';

 


const routes: Routes = [
  {
    path: '',
    component: GrilleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoomGrilleRoutingModule { }