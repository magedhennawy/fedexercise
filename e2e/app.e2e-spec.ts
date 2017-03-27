import { FedexercisePage } from './app.po';

describe('fedexercise App', function() {
  let page: FedexercisePage;

  beforeEach(() => {
    page = new FedexercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
