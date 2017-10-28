import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'icpc-diagnosis-subvisit-tab-action-tab',
  templateUrl: 'diagnosis-subvisit-tab.component.html'
})
export class DiagnosisSubVisitTabComponent {

  @Input()
  public diagnosisControl: FormControl;
}
