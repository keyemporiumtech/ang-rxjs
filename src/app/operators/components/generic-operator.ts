import { Directive } from '@angular/core';

@Directive()
export abstract class GenericOperator {
  message: string = '';
  loading: boolean = false;
  img: string = '';

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
