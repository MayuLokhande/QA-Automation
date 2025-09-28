import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class StudentListPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
   async navigate() {
await this.page.goto('https://app.mymusicstaff.com/Teacher/v2/en/students', { waitUntil: 'domcontentloaded' });
  }
  async search(){
    await this.page.click('//button[@data-sb-qa="search-button-on-table"]')
  }
  async filter(){
    await this.page.click('(//button[@type="submit"])[6]')
  }
async column(){
  await this.page.click('(//button[@type="submit"])[5]')
}
async messaging(sendtoemail : string){
await this.page.click('(//button[@type="submit"])[4]')
await this.page.click('(//p[@class="typography-input"])[1]')
await this.page.fill('//input[@id="MessageStudentParentAssignInput"]',sendtoemail)
}
}