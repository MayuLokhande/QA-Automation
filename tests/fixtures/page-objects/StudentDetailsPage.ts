import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class StudentDetailsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.page.goto('https://app.mymusicstaff.com/Teacher/v2/en/students#Students');
  

}
async editable(){
  await this.page.click('(//div[@class="scss-button-label px-2 ng-star-inserted"])[1]',{ timeout: 10000 });
  await this.page.click("//button[contains(@class, 'mat-mdc-menu-trigger') and contains(@class, 'btn-outline-secondary') and contains(@class, 'icon-button-medium')]");
    
}
async update(firstName: string, lastName: string, email: string){
    await this.page.fill('//input[@data-sb-qa="student-first-name-input"]', firstName);
    await this.page.fill('//input[@data-sb-qa="student-last-name-input"]',lastName);
    await this.page.fill('//input[@data-sb-qa="student-email-input"]',email);

}
async save(){
    await this.page.click('//button[@type="submit" and contains(@class, "mat-mdc-menu-trigger ") and contains(@class, "btn-primary")]')
}
async updatestudentdetails(intrument: string){
    await this.page.click("(//button[contains(@class, 'mat-mdc-menu-trigger')and contains(@class, 'btn-outline-secondary')and contains(@class, 'icon-button-small')])[3]")
    await this.page.fill('//input[@data-sb-qa="edit-student-subjects-input-input"]',intrument)
}

}