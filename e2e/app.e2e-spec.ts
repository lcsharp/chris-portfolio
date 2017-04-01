import { ChrisPortfolioPage } from './app.po';

describe('chris-portfolio App', () => {
  let page: ChrisPortfolioPage;

  beforeEach(() => {
    page = new ChrisPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
