import { Untitled14Page } from './app.po';

describe('untitled14 App', function() {
  let page: Untitled14Page;

  beforeEach(() => {
    page = new Untitled14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
