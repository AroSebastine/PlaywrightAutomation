import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test'

(async () => {

    const browser: Browser = await chromium.launch({
        headless: false,
        channel: 'msedge',
    })

    const page: Page = await browser.newPage()

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('arosebastinenishanth@gmail.com')
    await page.getByRole('textbox', { name: 'Password' }).fill('Aro987!')
    await page.getByRole('button', { name: 'Login' }).click()
    const myAccountHeadingContent: string | null = await page.getByRole('heading', { name: 'My Account' }).first().textContent() // or innerText()
    console.log(myAccountHeadingContent);



/*
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

    await page.getByRole('heading', { name:  })

    const firstNameTextbox: Locator = page.getByRole('textbox', { name: 'First Name' })
    const lastNameTextbox: Locator = page.getByRole('textbox', { name: 'Last Name' })
    const emailTextbox: Locator = page.getByRole('textbox', { name: 'E-Mail' })
    const telephoneTextbox: Locator = page.getByRole('textbox', { name: 'Telephone' })
    const passwordTextbox: Locator = page.getByRole('textbox', { name: '* Password', exact: true })
    const passwordConfirmTextbox: Locator = page.getByRole('textbox', { name: '* Password Confirm', exact: true })
    const subscribeYesButton: Locator = page.getByRole('radio', { name: 'Yes' })
    const subscribeNoButton: Locator = page.getByRole('radio', { name: 'No' })
    // const privacyPolicyCheckbox: Locator = page.getByRole('checkbox')
    const privacyPolicyCheckbox: Locator = page.locator("input[name='agree']")
    const continueButton: Locator = page.getByRole('button', { name: 'Continue' })

    await firstNameTextbox.fill('Aro')
    await lastNameTextbox.fill('Hendric')
    await emailTextbox.fill('arosebastinenishanth@gmail.com')
    await telephoneTextbox.fill('+91 9677122801')
    await passwordTextbox.fill('Aro987!')
    await passwordConfirmTextbox.fill('Aro987!')
    await subscribeYesButton.click()
    // await subscribeNoButton.click()
    await privacyPolicyCheckbox.click()
    await continueButton.click()    
    */
})()