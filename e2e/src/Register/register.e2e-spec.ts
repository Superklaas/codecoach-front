import {RegisterPage} from "./register.po";
import {browser, logging, protractor} from 'protractor';

describe('register page', () => {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
  });

  it('stays on register page when not all fields all filled in', () => {
    page.navigateTo();
    expect(protractor.ExpectedConditions.elementToBeClickable(page.getRegisterButton())).not.toBe(true);
  });

  it('can click register button when all fields are filled in', () => {
    page.navigateTo();
    page.getFirstnameInput().sendKeys('testFirstName');
    expect(protractor.ExpectedConditions.elementToBeClickable(page.getRegisterButton())).not.toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
