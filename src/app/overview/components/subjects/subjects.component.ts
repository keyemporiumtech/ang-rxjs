import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  Subscription,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnDestroy {
  message1: string = '';
  message2: string = '';
  message3: string = '';
  message4: string = '';
  sub1: Subscription | undefined;
  sub2: Subscription | undefined;
  sub3: Subscription | undefined;
  sub4: Subscription | undefined;

  call1() {
    const observable = new Observable((obj) =>
      obj.next(Math.floor(Math.random() * 10) + 1)
    );

    this.sub1 = observable.subscribe((data) => {
      this.message1 += '<br/>First Subscription Observable value: ' + data;
    });

    this.sub2 = observable.subscribe((data) => {
      this.message1 += '<br/>Second Subscription Observable value: ' + data;
    });

    const subject = new Subject();

    this.sub3 = subject.subscribe((data) => {
      this.message1 += '<br/>First Subscription Subject value: ' + data;
    });

    this.sub4 = subject.subscribe((data) => {
      this.message1 += '<br/>Second Subscription Subject value: ' + data;
    });

    subject.next(Math.floor(Math.random() * 10) + 1);
  }

  stop1() {
    this.message1 = '';
  }

  call2() {
    const subject = new BehaviorSubject(1);

    this.message2 +=
      '<br/><strong>Nessuna next ancora e mi sottoscrivo a BehaviorSubject(1)</strong>';

    this.sub3 = subject.subscribe((data) => {
      this.message2 += '<br/>First Subscription Subject value: ' + data;
    });

    this.message2 += '<br/><strong>Arriva la next di 2</strong>';

    subject.next(2);

    this.message2 +=
      '<br/><strong>mi sottoscrivo con una seconda subscription</strong>';

    this.sub4 = subject.subscribe((data) => {
      this.message2 += '<br/>Second Subscription Subject value: ' + data;
    });

    this.message2 += '<br/><strong>Arriva la next di 3</strong>';

    subject.next(3);
  }

  stop2() {
    this.message2 = '';
  }

  call3() {
    const subject = new ReplaySubject(2);

    this.message3 +=
      '<br/><strong>Nessuna next ancora e mi sottoscrivo a ReplaySubject(2)</strong>';

    this.sub3 = subject.subscribe((data) => {
      this.message3 += '<br/>First Subscription Subject value: ' + data;
    });

    this.message3 += '<br/><strong>Arrivano le next di 1, 2, 3, 4</strong>';

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    this.message3 +=
      '<br/><strong>mi sottoscrivo con una seconda subscription</strong>';

    this.sub4 = subject.subscribe((data) => {
      this.message3 += '<br/>Second Subscription Subject value: ' + data;
    });

    this.message3 += '<br/><strong>Arriva la next di 5</strong>';

    subject.next(5);
  }

  stop3() {
    this.message3 = '';
  }

  call4() {
    const subject = new AsyncSubject();

    this.message4 +=
      '<br/><strong>Nessuna next ancora e mi sottoscrivo a AsyncSubject()</strong>';

    this.sub3 = subject.subscribe((data) => {
      this.message4 += '<br/>First Subscription Subject value: ' + data;
    });

    this.message4 += '<br/><strong>Arrivano le next di 1, 2, 3, 4</strong>';

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    this.message4 +=
      '<br/><strong>mi sottoscrivo con una seconda subscription</strong>';

    this.sub4 = subject.subscribe((data) => {
      this.message4 += '<br/>Second Subscription Subject value: ' + data;
    });

    this.message4 += '<br/><strong>Arriva la next di 5</strong>';

    subject.next(5);

    this.message4 += '<br/><strong>Arriva il complete</strong>';

    subject.complete();
  }

  stop4() {
    this.message4 = '';
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
    if (this.sub3) {
      this.sub3.unsubscribe();
    }
    if (this.sub4) {
      this.sub4.unsubscribe();
    }
  }
}
