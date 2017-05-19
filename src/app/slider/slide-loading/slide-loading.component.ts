import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-loading',
  templateUrl: './slide-loading.component.html',
})
export class SlideLoadingComponent {

  @Input() url: any;

  constructor() { }

}
