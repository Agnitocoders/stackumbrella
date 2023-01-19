import { Component } from '@angular/core';
// import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    // private iab: InAppBrowser
  ) { }

  // ionViewWillEnter() {
  //   const browser = this.iab.create('https://www.stackumbrella.com/web-stories', '_blank', 'location=yes');
  //   browser.on('loadstop').subscribe(event => {
  //     console.log(event);
  //     const navUrl = event.url;
  //     if (navUrl.includes('success')) {
  //       browser.close();
  //     }
  //   });
  // }



}
