import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {PatientsService} from '../../services/PatientsService';

@Component({
  selector: 'icpc-patients',
  templateUrl: 'patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsPageComponent {

  @ViewChild('container')
  element: ElementRef;
  content: HTMLElement;
  header: HTMLElement;
  footer: HTMLElement;

  constructor(private patientsService: PatientsService) {
    patientsService.loadItems();
  }
  @HostListener('window:resize', ['$event'])
  public resize(event: Event) {
      this.calculateSize();
  }

  public ngAfterViewInit() {
      this.calculateSize();
  }

  public get patients() {
    return this.patientsService.patients;
  }
  private calculateSize() {
      this.content = document.querySelector('#content') as HTMLElement;
      this.header = document.querySelector('#header') as HTMLElement;
      this.footer = document.querySelector('#footer') as HTMLElement;

      let windowHeight = isNaN(window.innerHeight) ? (<any>window).clientHeight : window.innerHeight;

      this.content.style.height = `${windowHeight - this.header.scrollHeight - this.footer.scrollHeight}px`;
      this.content.style.marginTop = `${this.header.scrollHeight}px`;
      this.element.nativeElement.style.height =  this.content.style.height;
      console.log('RESIXE', this.element.nativeElement.style.height,`${ this.content.style.height}px`)
  }
}
