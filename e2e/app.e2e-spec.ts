import { SliderAppPage } from './app.po';

describe('slider-app App', () => {
  let page: SliderAppPage;

  beforeEach(() => {
    page = new SliderAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
