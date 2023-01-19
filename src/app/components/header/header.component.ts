import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() canGoback: string = '';
  canGo = ''
  constructor(public router: Router) { }

  ngOnInit() {
    this.canGo = this.canGoback
  }

  gotoSearch() {
    this.router.navigate(['/tabs/tab1/searches'])
  }

  gotoNotification() {
    this.router.navigate(['/tabs/tab1/notification'])
  }


}
