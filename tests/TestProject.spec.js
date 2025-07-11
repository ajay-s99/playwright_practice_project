import { test, expect } from '@playwright/test';


test('Visit', async ({page}) =>{
  //visit the website
     await page.goto('https://www.automationexercise.com/');
     // click on signup header menu
     await page.locator("a[href='/login']").click();
     // printed title of the section
     console.log(await page.locator(".signup-form h2").textContent())
    //Object created for name field
     const nameInput= page.locator("[name='name']")
     await nameInput.fill("ajjuz")
     const emailInput = page.locator("[data-qa='signup-email']")
     await emailInput.fill('Ajju@yopmail.com')
     const signUpcta = page.locator("[data-qa='signup-button']")
     await signUpcta.click()
     //Step 2
     //locate heading
     const heading = page.getByRole('heading',{name: 'Enter Account Information' })
     //validate heading text to be visible
     await expect(heading).toBeVisible();
     //validate heading text
     await expect(heading).toHaveText('Enter Account Information');
    const titleField = page.getByRole('heading', {name: 'Title'})
    //await page.pause();     
}); 
 
    

