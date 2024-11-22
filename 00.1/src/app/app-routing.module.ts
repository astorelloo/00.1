import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Carta1Component } from './carta1/carta1.component';

const routes: Routes = [
  { path: 'card/:name', component: Carta1Component},
  { path: '', redirectTo: 'card/temur-banner', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
