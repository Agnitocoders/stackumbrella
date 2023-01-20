import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { App } from '@capacitor/app';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    public menuCtr: MenuController,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this
  }

  goToPage(pageName: string) {

    if (pageName == 'logout') {
      App.exitApp();
    }
    else {
      this.router.navigate([pageName]);
      this.menuCtr.close();
    }

  }

  changeLanguage() {
    this.dataService.LangAlert()
  }

}
