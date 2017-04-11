import { NgPrototypePage } from './app.po';

describe('ng-prototype App', () => {
  let page: NgPrototypePage;

  beforeEach(() => {
    page = new NgPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
