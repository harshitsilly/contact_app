import { ContactAppPage } from './app.po';

describe('contact-app App', function() {
  let page: ContactAppPage;

  beforeEach(() => {
    page = new ContactAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
