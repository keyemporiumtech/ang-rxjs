import { Component } from '@angular/core';
import { GenericOperator } from '../../generic-operator';
import { Subscription, concat, tap } from 'rxjs';
import { ObservableUtility } from '../../../utility/observable-utility';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent extends GenericOperator {
  subscription: Subscription = new Subscription();

  constructor() {
    super();
    this.img = 'https://rxjs.dev/assets/images/marble-diagrams/concat.png';
  }

  ngOnInit(): void {
    this.start();
  }

  start() {
    this.message = '';
    const $obs1 = ObservableUtility.getObs(ObservableUtility.$obses[0], 1000);
    const $obs2 = ObservableUtility.getObs(ObservableUtility.$obses[1], 2000);

    this.subscription = concat($obs1, $obs2)
      .pipe(
        tap(() => this.startLoading()),
        tap((val) => {
          this.message += 'obsX=' + val + '<br/>';
          this.stopLoading();
        })
      )
      .subscribe();
  }
}
