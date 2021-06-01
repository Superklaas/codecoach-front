import { browser, by, element } from 'protractor';

export class SignInPage {

  navigateTo() {
    return browser.get(browser.baseUrl+'login') as Promise<any>;
  }

  getEmailInput(){
    return element(by.css('#email'));
  }

  getPasswordInput(){
    return element(by.css('#password'));
  }

  clickSignInButton(){
    return element(by.css('button.waves-effect:nth-child(1)')).click();
  }

  clickPasswordReset(){
    return element(by.css('button.waves-effect:nth-child(2)')).click();
  }

  getErrorMessageText(){
    return element(by.css('.alert')).getText();
  }


}
