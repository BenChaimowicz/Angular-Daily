import { Input, Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, FormControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[timeRange][formControl], [timeRange][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomTimeRangeDirective, multi: true}]
})

export class CustomTimeRangeDirective implements Validator {
  @Input()
  minMinutes = 1;
  maxMinutes = 720;

  validate(c: FormControl): { [key: string]: any } {
    const v: number = c.value;

    if (v < this.minMinutes || v > this.maxMinutes) {
      return { 'OutOfRange': true };
    }
  }

}
