import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksListComponent } from './blocks-list.component';

const routes: Routes = [
  {path: '', component: BlocksListComponent},
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocksListRoutingModule { }
