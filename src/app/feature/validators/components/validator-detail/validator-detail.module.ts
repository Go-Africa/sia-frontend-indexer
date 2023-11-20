import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorDetailRoutingModule } from './validator-detail-routing.module';
import { ValidatorDetailComponent } from './validator-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ValidatorDetailComponent],
  imports: [
    CommonModule,
    ValidatorDetailRoutingModule,
    SharedModule
  ]
})
export class ValidatorDetailModule { }
