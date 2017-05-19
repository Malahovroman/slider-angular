import {
  ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-print-slide',
  templateUrl: './print-slide.component.html',
  styleUrls: ['./print-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrintSlideComponent {

  @Input() meta: any;

  @ViewChild('videoEmbed') videoEmbed: ElementRef;
  @ViewChild('mapEmbed') mapEmbed: ElementRef;

  constructor(public sanitizer: DomSanitizer) {}


  get getVideoEmbed() {
    if (this.meta.sType !== 'video') {
      return '';
    }
    const regExpId = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    const id = regExpId.exec(this.meta.url);
    if (id && id[1]) {
      return this.sanitizer.bypassSecurityTrustHtml(`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id[1]}?rel=0?ecver=2" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>`);
    } else {
      throw new Error('invalid youtube link');
    }
  }

  get getMapEmbed() {
    if (this.meta.sType !== 'map') {
      return '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(`<iframe width="100%" height="100%" frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA9k-m0DMJ1Pgiwinmw714Cj3AIn0cmsag
    &q=${this.meta.q}" allowfullscreen></iframe>`);
  }
}
