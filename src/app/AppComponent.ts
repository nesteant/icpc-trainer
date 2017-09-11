import {Component, OnInit} from '@angular/core';
import {IcpcService} from './services/IcpcService';

@Component({
  selector: 'icpc-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private icpcService: IcpcService) {
  }

  public ngOnInit() {
    this.icpcService.loadItems();
  }
}
