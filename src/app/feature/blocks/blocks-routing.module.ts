import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', loadChildren: () => import('./components/blocks-list/blocks-list.module').then(m => m.BlocksListModule) },
  { path:':height', loadChildren: () => import('./components/block-details/block-details.module').then(m =>  m.BlockDetailsModule)},

  
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocksRoutingModule { }
