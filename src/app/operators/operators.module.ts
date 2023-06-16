import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineLatestComponent } from './components/joins/combine-latest/combine-latest.component';
import { OperatorsRoutingModule } from './operators-routing.module';
import { ListOperatorsComponent } from './components/list-operators/list-operators.component';
import { ForkJoinComponent } from './components/joins/fork-join/fork-join.component';
import { MergeComponent } from './components/joins/merge/merge.component';
import { PartitionComponent } from './components/joins/partition/partition.component';
import { ConcatComponent } from './components/joins/concat/concat.component';

@NgModule({
  declarations: [
    CombineLatestComponent,
    ListOperatorsComponent,
    ForkJoinComponent,
    MergeComponent,
    PartitionComponent,
    ConcatComponent,
  ],
  imports: [CommonModule, OperatorsRoutingModule],
  exports: [ListOperatorsComponent],
})
export class OperatorsModule {}
