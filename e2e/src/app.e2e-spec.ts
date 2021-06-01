import {AppPage} from './app.po';
import {browser, logging, by, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('navigateTo goes to the homepage', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('CodeCoach');
  });

  it('has a register button when in desktop mode and clicking on it goes to the register page', () => {
    page.navigateTo();
    page.clickRegisterButton();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "register");

  });

  it('has a sign in button when in desktop mode that goes to the sign-in page', () => {
    page.navigateTo();
    page.clickSignInButton();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "login");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
