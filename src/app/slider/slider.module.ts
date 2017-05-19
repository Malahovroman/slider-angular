import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSliderComponent } from './content-slider/content-slider.component';
import { PrintSlideComponent } from './print-slide/print-slide.component';
import { SlideLoadingComponent } from './slide-loading/slide-loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentSliderComponent, PrintSlideComponent, SlideLoadingComponent],
  exports: [ContentSliderComponent]
})
export class SliderModule { }
