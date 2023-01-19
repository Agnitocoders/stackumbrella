import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post-slider',
  templateUrl: './post-slider.component.html',
  styleUrls: ['./post-slider.component.scss'],
})
export class PostSliderComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  constructor(public dataService: DataService,
    private router: Router) { }

  ngOnInit() { }


  removeTag(string: string) {
    string = string.replace(/(<([^>]+)>)/ig, ' ');
    var html = string
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || " ";
    return text;
  }

  gotoDetailsPage(val: any) {
    this.dataService.selectedPost = val;
    this.router.navigate(['tabs/tab1/post-details']);
    // this.getNextPost()
  }
}
