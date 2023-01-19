import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostDetailsPageRoutingModule } from './post-details-routing.module';

import { PostDetailsPage } from './post-details.page';
import { ComponentsModule } from 'src/app/components/components/components.module';
import { NoSanitizePipe } from 'src/app/util/nosanitizerpipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PostDetailsPage, NoSanitizePipe]
})
export class PostDetailsPageModule { }
