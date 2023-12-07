import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';

// Angular material Imports
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [MatSlideToggleModule]
})
export class FeatureModule { }
