import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categoryId = ''

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    // const id = this.activeRoute.snapshot.queryParamMap.get('id')
    // console.log(id);
    // console.log(id);

  }

}
