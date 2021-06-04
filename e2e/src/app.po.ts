import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root div app-navigation-bar header nav div a')).getText() as Promise<string>;
  }

  clickRegisterButton(){
    return element(by.css('ul.right > li:nth-child(3) > a:nth-child(1) > div:nth-child(1)')).click();
  }

  getRegisterTitle(){
    return element(by.css('.center')).getText() as Promise<string>;
  }

  clickSignInButton(){
    return element(by.css('ul.right > li:nth-child(2) > a:nth-child(1) > div:nth-child(1)')).click();
  }

}
