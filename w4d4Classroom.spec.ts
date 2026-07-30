import {test} from "@playwright/test"

test("Learn alerts", async ({page}) => {

await page.goto("https://leafground.com/alert.xhtml")

page.once('dialog',async(alert)=>{
let alertType=alert.type()
console.log(alertType);

let alertMessage=alert.message()
console.log(alertMessage);

if(alertType==="prompt"){
await alert.accept("Playwright")
}else {
await alert.dismiss()
}

})

//await page.locator('(//span[text()="Show"])[1]').click()
//await page.locator('(//span[text()="Show"])[3]').click()
await page.locator('(//span[text()="Show"])[5]').click()

})