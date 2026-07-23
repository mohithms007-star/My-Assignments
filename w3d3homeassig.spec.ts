import {test} from "@playwright/test"

test('Check Locators', async ({page}) => {
    
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox',{name: "Username"}).fill('democsr2')
    await page.getByLabel('Password').fill('crmsfa')
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole("link",{name:"CRM/SFA"}).click();
    //Click leads
    await page.getByRole("link",{name:"Leads"}).click();
    await page.getByRole("link",{name:"Create Lead"}).click();
    await page.locator("//input[@id='createLeadForm_companyName']").fill("SIDE.INC")
    await page.locator("//input[@id='createLeadForm_firstName']").fill("Mohith")
    await page.locator("//input[@id='createLeadForm_lastName']").fill("MS")
    await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Mr.")
    await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill("QA")
    await page.locator("[name='annualRevenue']").fill("1452")
    await page.locator("#createLeadForm_departmentName").fill("QA")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("7204737417")
    await page.getByRole('button',{name:"Create Lead"}).click()
})