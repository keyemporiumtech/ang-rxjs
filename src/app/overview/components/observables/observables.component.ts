import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnDestroy {
  message1: string = '';
  message2: string = '';
  subObs1: Subscription | undefined;
  subObs2: Subscription | undefined;
  constructor() {}

  funEx() {
    return 42;
  }

  obs1Ex() {
    return new Observable((subscriber) => {
      subscriber.next(42);
      subscriber.next(100); // "return" another value
      subscriber.next(200); // "return" yet another
      setTimeout(() => {
        subscriber.next(300); // happens asynchronously
      }, 1000);
    });
  }

  promEx() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 500);

      setTimeout(() => {
        resolve(2);
      }, 1000);
    });
  }

  obs2Ex() {
    return new Observable<number>((subscriber) => {
      subscriber.next(42);
      subscriber.next(100); // "return" another value
      subscriber.next(200); // "return" yet another
      setTimeout(() => {
        subscriber.next(300); // happens asynchronously
      }, 1000);
    });
  }

  callObsVsFun() {
    this.message1 += '<br/>subscribe observable';

    this.subObs1 = this.obs1Ex().subscribe((res) => {
      this.message1 += '<br/>emit observable ' + res;
    });

    this.message1 += '<br/>after subscription observable';

    this.message1 += '<br/>call function';
    const funVal = this.funEx();
    this.message1 += '<br/>return function ' + funVal;
  }

  stopObsVsFun() {
    this.message1 = '';
  }

  callObsVsProm() {
    this.message2 += '<br/>subscribe observable';

    this.subObs2 = this.obs2Ex().subscribe((res) => {
      this.message2 += '<br/>emit observable ' + res;
    });

    this.message2 += '<br/>after subscription observable';

    this.message2 += '<br/>call promise';

    this.promEx().then((res) => {
      this.message2 += '<br/>emit promise ' + res;
    });

    this.message2 += '<br/>after promise';
  }

  stopObsVsProm() {
    this.message2 = '';
  }

  ngOnDestroy(): void {
    if (this.subObs1) {
      this.subObs1.unsubscribe();
    }
    if (this.subObs2) {
      this.subObs2.unsubscribe();
    }
  }
}
