import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsidebarComponent } from './components/asidebar/asidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NumberPipe } from './pipes/number.pipe';



@NgModule({
  declarations: [
    ContentLayoutComponent,
    HeaderComponent,
    FooterComponent,
    AsidebarComponent,
    NumberPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NumberPipe

  ]
})
export class SharedModule { }
