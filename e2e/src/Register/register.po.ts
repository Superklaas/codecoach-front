import { browser, by, element } from 'protractor';

export class RegisterPage {

  navigateTo() {
    return browser.get(browser.baseUrl+'register') as Promise<any>;
  }

  getRegisterButton(){
    return element(by.css('button.waves-effect'));
  }

  getFirstnameInput(){
    return element(by.css(' form.col > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)'));

  }




}
