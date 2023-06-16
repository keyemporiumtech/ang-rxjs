import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'operators',
    pathMatch: 'full',
  },
  {
    path: 'operators',
    loadChildren: () =>
      import('./operators/operators.module').then((m) => m.OperatorsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
