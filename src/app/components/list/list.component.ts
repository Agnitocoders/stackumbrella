import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  data: any = [] = [];
  isLoading: boolean = false;
  page = 1

  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll)
  virtualScroll!: IonVirtualScroll;


  constructor(
    public dataService: DataService,
    private http: HttpClient,
    private router: Router) { }

  async ngOnInit() {
    this.getAllPost();

  }

  async getAllPost() {
    try {
      this.isLoading = true
      this.http.get('https://stackumbrella.com/wp-json/wp/v2/posts?page=' + this.page + '&_embed')
        .subscribe((res: any) => {
          // this.data = res;
          // console.log(res);
          const featurepost = []
          for (let i = 0; i < res.length; i++) {
            if (res[i].content.rendered) {
              if (i < 4) {
                featurepost.push(res[i])
              } else {
                this.data.push(res[i])
              }
            }
            this.dataService.featurePost = featurepost;
          }
          this.dataService.featurePost
          this.isLoading = false
          return this.data
        });
    } catch (error) {
      console.log(error);
      alert('error');
      this.isLoading = false
    }
  }

  async getNextPost() {
    this.page = this.page + 1;
    console.log(this.page);
    var updatedData: any[] = []
    try {
      this.isLoading = true
      this.http.get('https://stackumbrella.com/wp-json/wp/v2/posts?page=' + this.page + '&_embed')
        .subscribe((resp: any) => {
          updatedData = resp;
          resp.forEach((element: any) => {
            this.data.push(element)
          });
        });
      this.isLoading = false
      console.log(this.data)
    } catch (error) {
      console.log(error);
      alert('error');
      this.isLoading = false
    }
  }

  loadData(event: any) {

    // Using settimeout to simulate api call 
    setTimeout(() => {

      // load more data
      this.getNextPost()

      //Hide Infinite List Loader on Complete
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  gotoDetailsPage(val: any) {
    this.dataService.selectedPost = val;
    this.router.navigate(['tabs/tab1/post-details']);
    // this.getNextPost()
  }

  selectPost(val: any) {
    this.dataService.selectedPost = [];
  }

  removeTag(string: string) {
    string = string.replace(/(<([^>]+)>)/ig, ' ');
    var html = string
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || " ";
    return text;
  }

}
