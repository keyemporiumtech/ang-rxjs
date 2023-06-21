import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOverviewsComponent } from './components/list-overviews/list-overviews.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [
  {
    path: '',
    component: ListOverviewsComponent,
  },
  {
    path: 'observables',
    component: ObservablesComponent,
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewRoutingModule {}
