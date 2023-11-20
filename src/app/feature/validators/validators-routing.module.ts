import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorsListComponent } from './components/validators-list/validators-list.component';
import { ValidatorDetailComponent } from './components/validator-detail/validator-detail.component';

const routes: Routes = [
  { path:'',component: ValidatorsListComponent},
  { path:':address',component: ValidatorDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidatorsRoutingModule { }
