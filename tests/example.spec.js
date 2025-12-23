import { test , expect } from '@playwright/test';
const { webkit } = require('playwright'); 

test('example test', async () => {
    // Launch the WebKit browser (headless by default)
    const browser = await webkit.launch();
    try {
        // Create a new page (tab)
        const page = await browser.newPage();
        //go to link for screenshot
         await page.goto("https://marvelcinematicuniverse.fandom.com/wiki/Rocket_Raccoon", {
            waitUntil: "domcontentloaded",
        });
        // Take a screenshot and save it to a file
        await page.screenshot({ path: "example-test.png", fullPage: true
        });

        // verify if screenshot matches
        await expect(page).toHaveScreenshot('example-test.png');

    } catch (e) {
        console.log(e);  //This line will execute and log the Error object
    } finally {
        await browser.close(); 
    }
});