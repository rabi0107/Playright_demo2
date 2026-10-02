const{test,expect}=require('@playwright/test') //importing tow thing


test('Open Google page and check title',async({page})=>
{
    await page.goto("https://www.google.com/")
    const pageTittle=await page.title()
    
    await expect(page).toHaveTitle(/Google/);

}


)



