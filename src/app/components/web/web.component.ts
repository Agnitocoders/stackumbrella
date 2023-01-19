import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent {

  constructor() { }





  // ionViewWillEnter() {
  //   const options: InAppBrowserOptions = {
  //     location: 'no',
  //     clearcache: 'yes',
  //     zoom: 'yes',
  //     toolbar: 'yes',
  //     closebuttoncaption: 'close'
  //   };

  //   const browser = this.iab.create('https://www.stackumbrella.com/web-stories', '_self', options)
  //   browser.on('loadstop').subscribe(event => {
  //     const navUrl = event.url;
  //     if (navUrl.includes('success')) {
  //       browser.close();
  //     }
  //   })
  // }
}
