import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorsListComponent } from './validators-list.component';

const routes: Routes = [
  {path: '', component: ValidatorsListComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidatorsListRoutingModule { }
