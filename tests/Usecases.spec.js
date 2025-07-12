const { test, expect } = require('@playwright/test');
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})
test.only ('Test Automation', async ({ page }) => {
    await page.goto("https://www.automationexercise.com/login");
    await page.locator("[name='name']").fill('ajjuz')
    await page.locator("[data-qa='signup-email']").fill('Ajjuzxzxzz@yopmail.com')
    await page.locator("[data-qa='signup-button']").click()
    await page.locator("[type='radio']").first().click()
    console.log(await page.locator("[type='radio']").first().isChecked())
    await page.locator("[type='password']").fill("Ajjuz@123")
    // await page.locator('label',{hasText: 'Receive special offers from our partners!'})
    // .locator("[type='checkbox']").click()
    await page.getByLabel('Receive special offers from our partners!').check()
    await page.locator('#days').selectOption('28');
    await page.locator('#months').selectOption('7');
    await page.locator('#years').selectOption('2000')
    await page.getByRole('textbox', { name: 'First name *'}).fill('jay ');
    await page.getByRole('textbox', { name: 'Last name *'}).fill('jay ');
    await page.getByRole('textbox', { name: 'Company', exact: true }).fill('jay agency');
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('San antonio');
    await page.getByLabel('Country *').selectOption('United States');
    await page.getByRole('textbox', { name: 'State *' }).fill('texas')
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('san antonio');
    await page.locator('#zipcode').fill('45557635');
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('44878728787');   
    await page.getByRole('button', { name: 'Create Account' }).click();
    await page.getByRole('link', { name: 'Continue' }).click();
    //await expect(page).toHaveURL('https://www.automationexercise.com/account_created');

    // adding a dynamic product into the cart
    const productToBuy = 'Winter Top'
    const totalProducts = await page.$$('[class="productinfo text-center"] ')
    const products = page.locator('[class="productinfo text-center"] ')
    // wait till all products to get load completely
    await page.waitForLoadState('networkidle')
    await page.locator('[class="productinfo text-center"] p').first().waitFor();
    // catch all available products name and log
    const productNames = await page.locator('[class="productinfo text-center"] p').allTextContents()
    console.log(productNames)
    const count = await products.count()
    for(let i=0; i<count; ++i){
        if(await products.nth(i).locator("p").textContent()=== productToBuy){
            await products.nth(i).locator('text=Add to cart').click()
            break;
        }
    }
    // only catch products under 500 RS
    for ( const product of totalProducts){
        const priceEl = await product.$('h2')
        const priceText =await priceEl.innerText()
        const price = parseFloat(priceText.replace('Rs.','').trim())

        if(!isNaN(price)&& price<500) {
            //const productElement = await productNames()
            const nameEl = await product.$('p')
            const name = nameEl ? await nameEl.innerText() : 'Unnamed product';
            console.log(`Product Name: ${name}, Price RS: ${price}`)
      }       
    }





    //await page.pause()

})