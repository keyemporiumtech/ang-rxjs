import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOverviewsComponent } from './components/list-overviews/list-overviews.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

@NgModule({
  declarations: [ListOverviewsComponent, ObservablesComponent, SubjectsComponent],
  imports: [CommonModule, OverviewRoutingModule],
})
export class OverviewModule {}
