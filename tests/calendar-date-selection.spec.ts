import { test, expect } from '@playwright/test'
import { practicePages } from '../data/login.ts'

test('calendar selection test', async({ page }) => {
    await page.goto(practicePages['calendar-page'])
    await page.locator('#datepicker').click()

    const monthToSelect = "April"
    const yearToSelect = "2026"
    const dateToSelect = "5"

    const monthLocator = await page.locator("//div[@class='ui-datepicker-title']/span[contains(@class,'month')]")
    const yearLocator = await page.locator("//div[@class='ui-datepicker-title']/span[contains(@class,'year')]")
    
    console.log(await page.locator("//div[@class='ui-datepicker-title']").textContent()); // November 2025

    while(await monthLocator.innerText() !== monthToSelect || await yearLocator.innerText() !== yearToSelect){
        await page.locator("//span[text()='Next']").click() 
    }

    await page.locator(`//a[text()="${dateToSelect}"]`).click()
    await page.pause()
})