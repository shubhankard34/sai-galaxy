import { SaiGalaxyPage } from './app.po';

describe('sai-galaxy App', function() {
  let page: SaiGalaxyPage;

  beforeEach(() => {
    page = new SaiGalaxyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
