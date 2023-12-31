import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/components/content-layout/content-layout.component';

const routes: Routes = [
  { path:'dashboard',component: ContentLayoutComponent, loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path:'transactions',component: ContentLayoutComponent, loadChildren: () => import('./feature/transactions/transactions.module').then(m => m.TransactionsModule)},
  { path:'addresses',component: ContentLayoutComponent, loadChildren: () => import('./feature/adresses/adresses.module').then(m => m.AdressesModule)},
  { path:'validators',component: ContentLayoutComponent, loadChildren: () => import('./feature/validators/validators.module').then(m => m.ValidatorsModule)},
  { path:'blocks',component: ContentLayoutComponent, loadChildren: () => import('./feature/blocks/blocks.module').then(m => m.BlocksModule)},
  { path: '**', redirectTo: 'dashboard'},
  { path: '', redirectTo: 'dashboard',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
