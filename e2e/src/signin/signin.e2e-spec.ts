import {SignInPage} from "./signin.po";
import {browser, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: SignInPage;

  beforeEach(() => {
    page = new SignInPage();
  });

  it('goes to forgot password page when you click reset password button', () => {
    page.navigateTo();
    page.clickPasswordReset();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "forgot-password");
  });


  it('goes to homepage with dashboard link when on sign in page and sign in with valid login info', () => {
    page.navigateTo();

    page.getEmailInput().sendKeys('coach1@codecoach.org');
    page.getPasswordInput().sendKeys('YouC0ach');
    page.clickSignInButton()
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "dashboard");
  });

  it('stays on the sign in page and shows an error message when you type a wrong password', () => {
    page.navigateTo();

    page.getEmailInput().sendKeys('coach1@codecoach.org');
    page.getPasswordInput().sendKeys('123456');
    page.clickSignInButton()
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "login");
    expect(page.getErrorMessageText()).toEqual(`Credentials aren't valid`);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});



/*

*/
