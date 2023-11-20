import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorsRoutingModule } from './validators-routing.module';
import { ValidatorsListComponent } from './components/validators-list/validators-list.component';
import { ValidatorDetailComponent } from './components/validator-detail/validator-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ValidatorsListComponent,
    ValidatorDetailComponent
  ],
  imports: [
    CommonModule,
    ValidatorsRoutingModule,
    SharedModule,
    NgxPaginationModule

  ]
})
export class ValidatorsModule { }
