import { Component } from '@angular/core';
import { Subscription, merge, of, tap } from 'rxjs';
import { GenericOperator } from '../../generic-operator';
import { ObservableUtility } from '../../../utility/observable-utility';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent extends GenericOperator {
  subscription: Subscription = new Subscription();

  constructor() {
    super();
    this.img = 'https://rxjs.dev/assets/images/marble-diagrams/merge.png';
  }

  ngOnInit(): void {
    this.start();
  }

  start() {
    this.message = '';
    const $obs1 = ObservableUtility.getObs(ObservableUtility.$obses[0], 1000);
    const $obs2 = ObservableUtility.getObs(ObservableUtility.$obses[1], 2000);

    this.subscription = merge($obs1, $obs2)
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
