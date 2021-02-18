import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

import { retry, take,  map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubscribe: Subscription;

  constructor() {
    // this.observableReturn().pipe(
    //   retry()
    // ).subscribe(
    //   value => console.log('Subs: '+value),
    //   error =>  console.error('error: '+error),
    //   () => console.log('Obs terminado')
    // );

    this.intervalSubscribe = this.intervalReturn().subscribe(
      console.log
    );
  }

  ngOnInit(): void {
  }

  intervalReturn(): Observable<number> {
    return interval(1000)
                      .pipe(
                        take(100),
                        // filter(value => value % 2 === 1),
                        map(value => value + 1)
                      );
  }

  observableReturn(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {

      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if ( i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('llegó a 2 men');
        }
      }, 1000);
    });
  }

  ngOnDestroy() {
    this.intervalSubscribe.unsubscribe();
  }

}
