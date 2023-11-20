import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorsListRoutingModule } from './validators-list-routing.module';
import { ValidatorsListComponent } from './validators-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ValidatorsListComponent],
  imports: [
    CommonModule,
    ValidatorsListRoutingModule,
    SharedModule
  ]
})
export class ValidatorsListModule { }
