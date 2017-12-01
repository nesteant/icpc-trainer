import {Component, Inject, Input} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'icpc-prompt-dialog',
  templateUrl: 'prompt-dialog.html',
})
export class PromptDialogComponent {

  @Input()
  public text: string;

  constructor(public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.text = data.text;
  }
}
