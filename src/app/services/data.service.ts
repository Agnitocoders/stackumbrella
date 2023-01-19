import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedPost = [];
  allPost = [];
  featurePost: any[] = [];
  selectedCategory = '';
  constructor(public http: HttpClient) {
    // this.getAllPost()
  }

  async getAllPost() {
    // let data: any = [];
    return this.http.get('https://stackumbrella.com/wp-json/wp/v2/posts?_embed')
      .subscribe(async (res: any) => {
        this.allPost = await res;
        // const data = res;
        // console.log(' post and imgs >>>>>>>>>>>')
        // console.log(data);
        return this.allPost
      })
  }




}
