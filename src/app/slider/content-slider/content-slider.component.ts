import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss'],
})
export class ContentSliderComponent {

  @Input() interval: any = 2000;
  slides: any;

  @Input('slides') set _slides(s){
    this.slides = s;
    console.log(this.slides);
    this.number = this.slides.length;
    if (this.slides.length) {
      this.slides[0]['classes'] = ['active'];
    }
  }

  @Input('autoPlay') set _autoPlay(b: boolean){
    this.autoPlay = b;
    if (b) {
      this.auto(this.interval);
    }
  }
  currentElement = 0;
  autoPlay = false;
  number= 0;
  intervalTime = 1000;
  private delayHideSetTimeOutControl: any;

  constructor() {}

  backWard() {
    if (this.autoPlay) {
      clearInterval(this.interval);
    }
    this.currentElement = this.currentElement - 1;
    if (this.currentElement < 0) {
      this.currentElement = this.number - 1;
    }
    this.removeClasses();
    const prev = this.currentElement == this.number - 1 ? 0 : this.currentElement + 1;
    this.slides[prev].classes = ['animateForward'];
    this.show(this.slides[prev]);
    this.show(this.slides[this.currentElement]);

    clearTimeout(this.delayHideSetTimeOutControl);

    this.delayHideSetTimeOutControl = this.delayHide(this.slides[prev], 1100);
    this.slides[this.currentElement].classes = ['active', 'backward'];
    if (this.autoPlay) {
      this.auto(this.intervalTime);
    }
  }

  removeClasses() {
    for (let i = 0; i < this.number; i++) {
      this.slides[i].classes = {};
    }
  }
  forWard() {
    console.log('forward called');
    if (this.autoPlay) {
      clearInterval(this.interval);
    }
    this._forWard();
    if (this.autoPlay) {
      this.auto(this.intervalTime);
    }
  }
  private _forWard() {
    this.currentElement = 1 + this.currentElement;
    if (this.currentElement >= this.number) {
      this.currentElement = 0;
    }
    this.removeClasses();
    const prev = this.currentElement === 0 ? this.number - 1 : this.currentElement - 1;
    console.log(this.slides[prev]);
    this.slides[prev]['classes'] = ['animateBack'];

    this.show(this.slides[prev]);
    this.show(this.slides[this.currentElement]);

    clearTimeout(this.delayHideSetTimeOutControl);
    this.delayHideSetTimeOutControl = this.delayHide(this.slides[prev], 1100);
    this.slides[this.currentElement].classes = ['active', 'forward'];
  }
  public toSlide(num: number) {
    const prev = this.currentElement;
    this.currentElement = num;
    if (this.currentElement >= this.number) {
      this.currentElement = 0;
    }
    this.removeClasses();
    console.log(this.slides[prev]);
    this.slides[prev]['classes'] = ['animateBack'];

    this.show(this.slides[prev]);
    this.show(this.slides[this.currentElement]);

    clearTimeout(this.delayHideSetTimeOutControl);
    this.delayHideSetTimeOutControl = this.delayHide(this.slides[prev], 1100);
    this.slides[this.currentElement].classes = ['active', 'forward'];
  }
  auto(ms) {
    this.autoPlay = true;
    this.intervalTime = ms;
    this.interval = setInterval(this._forWard.bind(this), ms);
  }
  delayHide(el, ms) {
    return setTimeout(() => el.hidden = true, ms);
  }
  show(el) {
    el.hidden = false;
  }

}
