import {test, chromium, webkit } from "@playwright/test" 

test ("launchRedBus", async() => {
const edgeBrowser = await chromium.launch(
    {channel: "msedge",
    headless: false});

const browserContext = await edgeBrowser.newContext();

const edgepage = await browserContext.newPage();

await edgepage.goto("https://www.redbus.in");

let redBusTitle = await edgepage.title();
console.log("Redbus URL "+ edgepage.url());
console.log("Redbus Title"+ redBusTitle);

const webKitBrowser = await webkit.launch({headless: false})
const webkitcontext = await webKitBrowser.newContext();
const webkitPage = await webkitcontext.newPage();

await webkitPage.goto("https://www.flipkart.com")

console.log("Flipkart Title "+await webkitPage.title());
console.log("Flipkart URL "+ webkitPage.url());


})
