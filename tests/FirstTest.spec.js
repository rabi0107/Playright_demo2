const{test,expect}=require('@playwright/test') //importing tow thing


test('Open Google page and check title',async({page})=>
{
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(5000)
    const pageTittle=await page.title()
    
    await expect(page).toHaveTitle(/Google/);
    await page.close();

}


)



