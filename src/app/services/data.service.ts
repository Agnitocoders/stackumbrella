import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { App } from 'src/AppConstant';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedPost = [];
  allPost = [];
  featurePost: any[] = [];
  selectedCategory = '';
  BaseUrl = '';
  language: string = ''
  constructor(
    public http: HttpClient,
    public alertController: AlertController,
    public menuCtr: MenuController
  ) {
    this.setLanguage()
  }


  setLanguage() {
    let lang = localStorage.getItem('language');
    console.log(lang)
    if (lang == '' || lang == 'english') {
      this.language = 'english';
      localStorage.setItem('language', this.language);
      this.BaseUrl = App.BaseUrl;
      return
    } if (lang == 'hindi') {
      this.language = 'hindi';
      localStorage.setItem('language', this.language);
      this.BaseUrl = App.BaseUrl2;
    }
    console.log('this is lang is hare >>>>>> ', lang);
  }


  async LangAlert() {
    let lang = ''
    const header = 'Change language?';
    let subHeader = '';
    if (this.language == 'hindi') {
      subHeader = 'English Language';
      lang = 'english'
    } if (this.language == 'english') {
      subHeader = 'हिन्दी भाषा'
      lang = 'hindi'
    }
    console.log(lang)

    const alert = await this.alertController.create({
      mode: "ios",
      header: header,
      subHeader: subHeader,
      backdropDismiss: true,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.menuCtr.close()
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log(lang)
            localStorage.setItem('language', lang);
            this.language = lang;
            if (this.language == 'hindi') {
              this.BaseUrl = App.BaseUrl2
            }
            if (this.language == 'english') {

              this.BaseUrl = App.BaseUrl
            }
            this.menuCtr.close()
          },
        },
      ],

    });

    await alert.present();
  }



}
