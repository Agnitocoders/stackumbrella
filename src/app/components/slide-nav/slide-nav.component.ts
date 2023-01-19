import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.scss'],
})
export class SlideNavComponent implements OnInit {
  isLoading: boolean = false;
  natTopNav: any[] = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getAllCategory();
  }

  async getAllCategory() {
    try {
      this.isLoading = true
      this.http.get('https://stackumbrella.com/wp-json/wp/v2/categories?per_page=100')
        .subscribe((res: any) => {
          this.natTopNav = res;
          console.log('Category res >>>>>>>', res);
          this.isLoading = false
        });
    } catch (error) {
      console.log(error);
      alert('error');
      this.isLoading = false
    }
    // this.dataService.getAllPost().then((obj: any) => {
    //   this.data = obj
    // });
    // console.log(this.data)
  }

  getIcon(icon: string) {

    if (icon == 'Bollywood') {
      return icon = 'videocam'
    }

    if (icon == 'Business') {
      return icon = 'business'
    }

    if (icon == 'Career Update') {
      return icon = 'school'
    }

    if (icon == 'coronavirus') {
      return icon = 'medical'
    }

    if (icon == 'Fashion') {
      return icon = 'shirt'
    }

    if (icon == 'Food Mate') {
      return icon = 'pizza'
    }

    if (icon == 'Govt Schemes') {
      return icon = 'golf'
    }
    if (icon == 'Hollywood') {
      return icon = 'videocam'
    }
    if (icon == 'Informative') {
      return icon = 'map'
    } else {
      return icon = 'home'
    }
  }

  goToPage(id: string) {
    this.dataService.selectedCategory = id
    this.router.navigate(['tabs/tab1/category/', id]);
  }
}
