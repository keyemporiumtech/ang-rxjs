import { Observable, from, interval, of, zip } from 'rxjs';

export class ObservableUtility {
  static $obses = [
    of('1', '2', '3', '4'),
    of('a', 'b', 'c'),
    of('10', '20', '30', '40'),
    of('A', 'B', 'C', 'D', 'E'),
  ];

  static getObs($obs?: Observable<any>, timer?: number) {
    if (!$obs) {
      const random = Math.floor(Math.random() * this.$obses.length);
      $obs = this.$obses[random];
    }

    return timer
      ? zip(
          from($obs),
          interval(timer),
          (val, i) => 't[' + i + '] => ' + val // Just emit the value
        )
      : $obs;
  }
}
