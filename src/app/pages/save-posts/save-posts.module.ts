import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavePostsPageRoutingModule } from './save-posts-routing.module';

import { SavePostsPage } from './save-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavePostsPageRoutingModule
  ],
  declarations: [SavePostsPage]
})
export class SavePostsPageModule {}
