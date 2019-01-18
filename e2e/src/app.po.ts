import { browser, by, element, $$ } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }



  
addName() {
  return element(by.cssContainingText('button', 'Ajouter un nom')).click();
}

removeName() {
  return element(by.cssContainingText('button', 'Supprimer un nom')).click();
}

sendKeysToInputNameByIndex(inputIndex: number, text: string) {
  return $$('input').get(inputIndex).sendKeys(text);
}

getTextContentByIndex(spanIndex: number) {
  return $$('span').get(spanIndex).getText();
}

getNumberofInput() {
  return $$('input').count();
}
}
