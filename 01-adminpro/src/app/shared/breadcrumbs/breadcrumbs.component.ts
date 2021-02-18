import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string;

  public titleSubs$: Subscription;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.getRouteArguments();
  }

  getRouteArguments() {
    this.titleSubs$ = this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map((event: ActivationEnd) => event.snapshot.data),
      )
      .subscribe(({ title }) => {
        this.title = title;
        document.title = `AdminPro - ${this.title}`;
    })
  }

  
  ngOnDestroy() {
    this.titleSubs$.unsubscribe();
  }
}
