import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './template/header/header.component';

@NgModule({
  declarations: [
    TemplateComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class PortfolioUiModule { }
