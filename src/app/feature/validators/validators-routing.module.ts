import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorsListComponent } from './components/validators-list/validators-list.component';
import { ValidatorDetailComponent } from './components/validator-detail/validator-detail.component';

const routes: Routes = [
  { path:'', loadChildren: () => import('./components/validators-list/validators-list.module').then(m => m.ValidatorsListModule)},
  { path:':address', loadChildren: () => import('./components/validator-detail/validator-detail.module').then(m => m.ValidatorDetailModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidatorsRoutingModule {}
