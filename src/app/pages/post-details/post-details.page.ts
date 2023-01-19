import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class PostDetailsPage implements OnInit {
  canGoBack = 'canGoBack';
  selectedPost: any = [];
  postDetails: string = '';
  constructor(
    private dataService: DataService,
    public menuCtr: MenuController,
    public domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    // this.selectedPost = this.dataService.selectedPost
    // console.log(
    //   this.dataService.selectedPost)
    this.menuCtr.close()
  }

  ionViewWillEnter() {
    this.selectedPost = this.dataService.selectedPost;
    // this.id = this.dataService.selectedPost
    // console.log(this.dataService.selectedPost);
    const render = this.selectedPost.content;
    console.log(this.selectedPost)
    console.log(this.selectedPost['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['thumbnail']['source_url']);
    this.selectedPost.content.rendered = this.domSanitizer.bypassSecurityTrustHtml(this.selectedPost.content.rendered);
    // this.selectedPost.content.rendered = this.domSanitizer.bypassSecurityTrustScript(this.selectedPost.content.rendered);
    // console.log(this.postDetails);
  }

  removeTag(string: string) {
    string = string.replace(/(<([^>]+)>)/ig, ' ');
    var html = string
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || " ";
    return text;
  }

  ionViewWillLeave() {
    this.menuCtr.close()
  }

}
