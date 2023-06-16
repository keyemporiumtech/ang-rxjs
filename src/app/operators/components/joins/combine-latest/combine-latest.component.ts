import { Component } from '@angular/core';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GenericOperator } from '../../generic-operator';
import { ObservableUtility } from '../../../utility/observable-utility';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent extends GenericOperator {
  subj1: BehaviorSubject<any> = new BehaviorSubject<any>('0');
  subj2: BehaviorSubject<any> = new BehaviorSubject<any>('a');
  subscription: Subscription = new Subscription();

  constructor() {
    super();
    this.img =
      'https://rxjs.dev/assets/images/marble-diagrams/combineLatest.png';
  }

  ngOnInit(): void {
    this.start();
  }

  start() {
    this.message = '';
    const $obs1 = ObservableUtility.getObs(ObservableUtility.$obses[0], 1000);
    const $obs2 = ObservableUtility.getObs(ObservableUtility.$obses[1], 2000);

    this.subscription = combineLatest([$obs1, $obs2])
      .pipe(
        tap(() => this.startLoading()),
        tap(([val1, val2]) => {
          this.message += 'obs1=' + val1 + ' obs2=' + val2 + '<br/>';
          this.stopLoading();
        })
      )
      .subscribe();
  }

  tryBehaviour() {
    const $obs1 = this.subj1.asObservable();
    const $obs2 = this.subj2.asObservable();

    this.subscription = combineLatest([$obs1, $obs2])
      .pipe(
        tap(() => this.startLoading()),
        tap(([val1, val2]) => {
          this.message = ' v1=' + val1 + ' v2=' + val2;
          this.stopLoading();
        })
      )
      .subscribe();
  }

  change1(val: any) {
    this.subj1.next(val);
  }

  change2(val: any) {
    this.subj2.next(val);
  }

  changeDelay(val1: any, val2: any) {
    this.change1(val1);
    setTimeout(() => {
      this.change2(val2);
    }, 5000);
  }
}
