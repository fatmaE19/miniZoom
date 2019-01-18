import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });



  it('should add TEST name', () => {
    page.navigateTo();
    page.addName();
  
    // Ecriture dans le première zone de saisie
    page.sendKeysToInputNameByIndex(0, 'TEST');
  
    expect(page.getTextContentByIndex(0)).toEqual('Le nom est TEST');
  });
  
  // Cas 2
  it('should add TEST2 name', () => {
    page.addName();
  
    // Ecriture dans le deuxième zone de saisie
    page.sendKeysToInputNameByIndex(1, 'TEST2');
  
    // Vérification des 2 textes
    expect(page.getTextContentByIndex(1)).toEqual('Le nom est TEST2');
    expect(page.getTextContentByIndex(0)).toEqual('Le nom est TEST');
    expect(page.getNumberofInput()).toEqual(2);
  });
  
  // Cas 3
  it('should remove last name', () => {
    page.removeName();
  
    // Vérification du nombre 
    expect(page.getNumberofInput()).toEqual(1);
  });
});
