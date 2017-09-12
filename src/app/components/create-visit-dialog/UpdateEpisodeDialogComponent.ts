import {Component, Inject, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {IcpcService} from '../../services/IcpcService';
import {Episode} from '../../model/Episode';

@Component({
  selector: 'icpc-create-visit-dialog',
  templateUrl: 'update-episode-dialog.html',
})
export class UpdateEpisodeDialogComponent implements OnInit {

  @Input()
  public episode: Episode;

  public formGroup: FormGroup;

  constructor(private icpcService: IcpcService,
              public dialogRef: MdDialogRef<UpdateEpisodeDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              fb: FormBuilder) {
    this.episode = data.episode;
    this.formGroup = fb.group({
      name: new FormControl()
    });
  }

  public ngOnInit(): void {
    this.formGroup.patchValue({
      name: this.episode.name
    })
  }

  public save() {
    this.dialogRef.close(this.formGroup.value);
  }

}
