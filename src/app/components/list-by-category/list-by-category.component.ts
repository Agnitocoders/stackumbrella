import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
@Component({
  selector: 'app-list-by-category',
  templateUrl: './list-by-category.component.html',
  styleUrls: ['./list-by-category.component.scss'],
})
export class ListByCategoryComponent implements OnInit {

  @Input() id: string = '';
  data: any = [] = [];
  isLoading: boolean = false;
  page = 0

  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll)
  virtualScroll!: IonVirtualScroll;


  constructor(
    public dataService: DataService,
    private http: HttpClient,
    private router: Router) { }

  async ngOnInit() {
    this.id = this.dataService.selectedCategory;
    this.getRecords();
  }


  async getRecords() {
    this.page = this.page + 1;
    console.log(this.page);
    var updatedData: any[] = []
    try {
      this.isLoading = true
      this.http.get('https://stackumbrella.com/wp-json/wp/v2/posts?page=' + this.page + '&categories=' + this.id + '&_embed')
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
    setTimeout(() => {
      this.getRecords()
      event.target.complete();
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