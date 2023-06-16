import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombineLatestComponent } from './components/joins/combine-latest/combine-latest.component';
import { ListOperatorsComponent } from './components/list-operators/list-operators.component';
import { ForkJoinComponent } from './components/joins/fork-join/fork-join.component';
import { MergeComponent } from './components/joins/merge/merge.component';
import { PartitionComponent } from './components/joins/partition/partition.component';
import { ConcatComponent } from './components/joins/concat/concat.component';

const routes: Routes = [
  {
    path: '',
    component: ListOperatorsComponent,
  },
  {
    path: 'combineLatest',
    component: CombineLatestComponent,
  },
  {
    path: 'forkJoin',
    component: ForkJoinComponent,
  },
  {
    path: 'merge',
    component: MergeComponent,
  },
  {
    path: 'partition',
    component: PartitionComponent,
  },
  {
    path: 'concat',
    component: ConcatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsRoutingModule {}
