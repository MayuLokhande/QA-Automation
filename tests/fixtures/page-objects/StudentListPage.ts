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
    await this.page.click('//button[@data-sb-qa="apply-button"]')
  }
async messaging(sendtoemail : string){
await this.page.getByRole('button', { name: 'Messaging' }).click();
  await this.page.getByRole('menuitem', { name: 'New Email' }).click();
  await this.page.locator('lib-form-field-input-text-with-chips-and-ids #MessageStudentParentAssignInput').click();
  await this.page.getByText('Lokhande, Mayura <').click();
  await this.page.locator('#formFieldID-TeacherPortalMessageHistorySubjectInput').click();
  await this.page.locator('#formFieldID-TeacherPortalMessageHistorySubjectInput').fill(sendtoemail);
  await this.page.getByRole('button', { name: 'Send' }).click();

}
}