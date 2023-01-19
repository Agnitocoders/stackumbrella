import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchesPage } from './searches.page';

const routes: Routes = [
  {
    path: '',
    component: SearchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchesPageRoutingModule {}
