import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { renderStudio } from 'sanity';
import config from '../../../../angularsanity/sanity.config';

@Component({
  selector: 'app-studio',
  standalone: true,
  template: '<div #studioContainer style="height: 100vh;"></div>',
  styles: [`
    :host {
      display: block;
      height: 100vh;
      width: 100%;
    }
  `]
})
export class StudioComponent implements AfterViewInit {
  @ViewChild('studioContainer') studioContainer!: ElementRef;

  ngAfterViewInit() {
    renderStudio(this.studioContainer.nativeElement, config);
  }
}
