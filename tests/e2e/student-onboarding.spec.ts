import { test, expect, chromium } from '@playwright/test';
import { StudentFormPage } from '@fixtures/page-objects/studentformpage';
import { StudentListPage } from '@fixtures/page-objects/StudentListPage';
import { StudentDetailsPage} from '@fixtures/page-objects/StudentDetailsPage';

test('Add a new student', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
  storageState: './tests/auth.json', 
});

  const page = await context.newPage();

  const studentForm = new StudentFormPage(page);
  const studentlist = new StudentListPage(page);
  const studentdetails = new StudentDetailsPage(page);

  await studentForm.navigate();
  await studentForm.fillName('Mayura', 'Lokhande');
  await studentForm.fillEmail('mayuralokhande@gmail.com');
  await studentForm.fillPhone(1234567890);
  await studentForm.checkstatus();
  await studentForm.studenttype();
  await studentForm.studentfamily();
  await studentForm.parentname('Mayur', 'Lokhande')
  await studentForm.submit();

  await expect(page).toHaveURL(/students/);

await studentlist.navigate();
await studentlist.search();
await studentlist.filter();
await studentlist.messaging('Regarding intrument')


await studentdetails.navigate();
await studentdetails.editable();
await studentdetails.update('Mobisa', 'Hansani', 'mobisahansani@gmail.com');
await studentdetails.save();
await studentdetails.updatestudentdetails('piano');



await browser.close();
});
