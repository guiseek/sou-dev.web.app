import { map } from 'rxjs/operators';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Component, OnInit, ViewEncapsulation, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { Observable } from 'rxjs';

declare var ng: any;


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  page$: Observable<ScullyRoute>;

  ngOnInit() {
    this.page$ = this.scully.getCurrent();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scully: ScullyRoutesService,
  ) { }
}
