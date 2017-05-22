import { TestLinksFirebasePage } from './app.po';

describe('test-links-firebase App', () => {
  let page: TestLinksFirebasePage;

  beforeEach(() => {
    page = new TestLinksFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
