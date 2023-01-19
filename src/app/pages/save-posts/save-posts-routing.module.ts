import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavePostsPage } from './save-posts.page';

const routes: Routes = [
  {
    path: '',
    component: SavePostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavePostsPageRoutingModule {}
