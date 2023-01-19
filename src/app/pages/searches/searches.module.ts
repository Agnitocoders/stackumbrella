import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchesPageRoutingModule } from './searches-routing.module';

import { SearchesPage } from './searches.page';
import { ComponentsModule } from 'src/app/components/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchesPage]
})
export class SearchesPageModule { }
