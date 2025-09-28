import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class StudentFormPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
await this.page.goto('https://app.mymusicstaff.com/Teacher/v2/en/students/add', { waitUntil: 'domcontentloaded' });

  }

 async fillName(first: string, last: string) {

  await this.page.waitForSelector('//input[@data-sb-qa="student-input-first-name"]', { timeout: 35000 });
  await this.page.fill('//input[@data-sb-qa="student-input-first-name"]', first);

  await this.page.waitForSelector('//input[@data-sb-qa="student-input-last-name"]', { timeout: 35000 });
  await this.page.fill('//input[@data-sb-qa="student-input-last-name"]', last);
}


  async fillEmail(email: string) {
    await this.page.fill('//input[@data-sb-qa="student-input-email"]', email);
  }

  async fillPhone(phone: number) {
    await this.page.fill('//input[@data-sb-qa="student-input-phone"]', phone.toString());
  }

  async capability(){
    await this.page.locator('//input[@type="checkbox" and @id="mat-mdc-checkbox-71-input"]').click({ force: true });

  }
  async checkstatus() {
    await this.page.locator('//mat-radio-button[@data-sb-qa="student-trial"]//input[@type="radio"]').click({ force: true });

  }


  async studenttype() {
    await this.page.locator('//mat-radio-button[@data-sb-qa="student-child-option"]').click({ force: true });
  }

  async studentfamily() {
    await this.page.locator('//mat-radio-button[@data-sb-qa="student-add-new-family"]').click({ force: true });
  }
  
  async parentname(first:string, last:string){
    await this.page.fill('//input[@data-sb-qa="parent-firstname"]',first)
    await this.page.fill('//input[@data-sb-qa="parent-lastname"]',last)
  }
  
  async submit() {
    await this.page.click('(//button[@type="submit"])[3]');
  }
}
