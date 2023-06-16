import { Component } from '@angular/core';
import { GenericOperator } from '../../generic-operator';
import { BehaviorSubject, Subscription, forkJoin, of, tap, timer } from 'rxjs';
import { ObservableUtility } from '../../../utility/observable-utility';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss'],
})
export class ForkJoinComponent extends GenericOperator {
  subscription: Subscription = new Subscription();

  constructor() {
    super();
    this.img = 'https://rxjs.dev/assets/images/marble-diagrams/forkJoin.png';
  }

  ngOnInit(): void {
    this.start();
  }

  start() {
    this.message = '';
    const $obs1 = ObservableUtility.getObs(ObservableUtility.$obses[0], 1000);
    const $obs2 = ObservableUtility.getObs(ObservableUtility.$obses[1], 2000);

    this.subscription = forkJoin([$obs1, $obs2])
      .pipe(
        tap(() => this.startLoading()),
        tap(([val1, val2]) => {
          this.message += 'obs1=' + val1 + ' obs2=' + val2 + '<br/>';
          this.stopLoading();
        })
      )
      .subscribe();
  }
}
