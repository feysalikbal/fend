import { SharePage } from './app.po';

describe('share App', () => {
  let page: SharePage;

  beforeEach(() => {
    page = new SharePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
