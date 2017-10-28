import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSelect} from '@angular/material';
import {Episode} from '../../model/Episode';
import {Patient} from '../../model/Patient';
import {IcpcCode} from '../../model/IcpcCode';
import {Observable} from 'rxjs/Observable';
import {IcpcService} from '../../services/IcpcService';

@Component({
  selector: 'icpc-update-episode-dialog',
  templateUrl: 'update-episode-dialog.html',
})
export class UpdateEpisodeDialogComponent implements OnInit {

  @Input()
  public patient: Patient;

  @Input()
  public episode: Episode;
  public episodeNameGroup: FormGroup;
  @ViewChild('select')
  public select: MatSelect;

  constructor(public dialogRef: MatDialogRef<UpdateEpisodeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private icpcService: IcpcService,
              fb: FormBuilder) {
    this.episodeNameGroup = fb.group({
      diagnosis: new FormControl(null, Validators.required),
      episode: new FormControl(null, Validators.required)
    });
    this.episode = data.episode;
    this.patient = data.patient;
  }

  public ngOnInit(): void {
    this.episodeNameGroup.setValue(this.episode.name);
  }

  public save() {
    this.dialogRef.close(this.episodeNameGroup.value);
  }

}
