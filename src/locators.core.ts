import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test'
import { log } from 'console'

(async () => {

    const browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome',
    })

    const page: Page = await browser.newPage()
/*
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    const usernameInput: Locator = page.locator('//input[@name="email"]') // xpath
    await usernameInput.fill('march2024@open.com')

    const passwordInput: Locator = page.locator('#input-password') // css
    await passwordInput.fill('Selenium@12345')

    const loginButton: Locator = page.locator('input[type="submit"]') // css
    await loginButton.click()

    // const headerText: string|null = await page.getByText('My Account').nth(2).textContent() // playwrite locator method but it is not reliable to use nth
    const headerText: string|null = await page.locator("//h2[text()='My Account']").textContent()

    console.log(headerText);
    await page.waitForTimeout(3000)

    await page.close() */

    // await page.waitForTimeout(4000)

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

    await page.getByPlaceholder('First Name').fill('testing')
    await page.getByPlaceholder('Telephone').fill('9677122802')
    
    // await page.locator('#input-firstname').highlight()
    await page.locator('#input-lastname').pressSequentially('Hendric', { delay: 250 })
    


}) ()