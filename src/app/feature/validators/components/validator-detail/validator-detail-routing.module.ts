import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorDetailComponent } from './validator-detail.component';

const routes: Routes = [
  {path: '', component: ValidatorDetailComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidatorDetailRoutingModule { }
