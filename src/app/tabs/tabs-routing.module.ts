import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../pages/videos/videos.module').then(m => m.VideosPageModule)
      },
      {
        path: 'tab1/post-details',
        loadChildren: () => import('./../pages/post-details/post-details.module').then(m => m.PostDetailsPageModule)
      },
      {
        path: 'tab1/notification',
        loadChildren: () => import('./../pages/notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'tab1/searches',
        loadChildren: () => import('../pages/searches/searches.module').then(m => m.SearchesPageModule)
      },
      {
        path: 'tab1/profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'tab1/save-posts',
        loadChildren: () => import('../pages/save-posts/save-posts.module').then(m => m.SavePostsPageModule)
      },
      {
        path: 'tab1/settings',
        loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'tab1/category/:id',
        loadChildren: () => import('../pages/category/category.module').then(m => m.CategoryPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
