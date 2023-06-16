import { Component } from '@angular/core';
import { GenericOperator } from '../../generic-operator';
import { Subscription, partition, of, tap } from 'rxjs';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.scss'],
})
export class PartitionComponent extends GenericOperator {
  subscription1: Subscription = new Subscription();
  subscription2: Subscription = new Subscription();

  constructor() {
    super();
    this.img = 'https://rxjs.dev/assets/images/marble-diagrams/partition.png';
  }

  ngOnInit(): void {
    const $obs1 = of('1', '2', '3', '4', '5', '6');

    const [$obsP1, $obsP2] = partition($obs1, (value) => +value % 2 === 0);

    this.subscription1 = $obsP1
      .pipe(
        tap(() => this.startLoading()),
        tap((val) => {
          this.message += 'obs1 [' + val + '] - ';
          this.stopLoading();
        })
      )
      .subscribe();

    this.subscription2 = $obsP2
      .pipe(
        tap(() => this.startLoading()),
        tap((val) => {
          this.message += 'obs2 [' + val + '] - ';
          this.stopLoading();
        })
      )
      .subscribe();
  }
}
