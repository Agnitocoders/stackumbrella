import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SlideNavComponent } from '../slide-nav/slide-nav.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { ListComponent } from '../list/list.component';
import { NoSanitizePipe } from 'src/app/util/nosanitizerpipe';
import { ListByCategoryComponent } from '../list-by-category/list-by-category.component';
import { PostSliderComponent } from '../post-slider/post-slider.component';
import { WebComponent } from '../web/web.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SlideNavComponent,
    MenuComponent,
    ListComponent,
    ListByCategoryComponent,
    PostSliderComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    // SocialSharing
  ],
  exports: [
    HeaderComponent,
    SlideNavComponent,
    MenuComponent,
    ListComponent,
    ListByCategoryComponent,
    PostSliderComponent,
    WebComponent
  ]
})
export class ComponentsModule { }
