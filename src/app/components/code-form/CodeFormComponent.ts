import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from 'rxjs/util/noop';

@Component({
  selector: 'icpc-code-form',
  templateUrl: 'code-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeFormComponent),
      multi: true
    }
  ]
})
export class CodeFormComponent implements ControlValueAccessor {

  public formGroup: FormGroup;

  private onChange: any = noop;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      code: new FormControl(),
      shortTitleUa: new FormControl(),
      preferred: new FormControl(),
      shortTitle: new FormControl(),
      inclusionUa: new FormControl(),
      inclusion: new FormControl(),
      exclusionUa: new FormControl(),
      exclusion: new FormControl(),
      criteriaUa: new FormControl(),
      criteria: new FormControl(),
      considerUa: new FormControl(),
      consider: new FormControl(),
      noteUa: new FormControl(),
      note: new FormControl()
    });
    this.formGroup.valueChanges.subscribe(v => this.onChange(v));
  }

  writeValue(obj: any): void {
    this.formGroup.patchValue(obj || {});
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

}
