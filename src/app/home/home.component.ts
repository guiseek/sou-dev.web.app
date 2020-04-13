import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]>;
  fireCard: ScullyRoute;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.links$ = this.scully.available$
      .pipe(
        map(posts => posts.filter(p => p.cover)),
        tap(posts => {
          // console.log(posts);
          this.fireCard = posts[1];
          console.log(posts[1]);
        })
      )
  }
}