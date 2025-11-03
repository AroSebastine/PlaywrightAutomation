import { test, expect, Page, Locator } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'

test('value assertions', async({ page }) => {
    expect(1+1).toBe(2)
    expect('playwright').toContain('play')
    expect([1, 2, 3]).toEqual([1, 2, 3])
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
    expect(50).toBeGreaterThan(49)
    expect({age: 20, role: 'admin'}).toEqual({role: 'admin', age: 20})

})

test('locator assertions', async({ page }) => {
    await page.goto(naveenAutomationLabsLogin.url)
    const returningCustomerHeader = page.getByRole('heading', { name: 'Returning Cust', level: 2, exact: false })
    expect(returningCustomerHeader).toBeVisible()
    await expect(returningCustomerHeader).toContainText('Customer', { timeout: 200 })

    const emailAddressTextbox = page.getByPlaceholder('E-Mail Address')
    await expect(emailAddressTextbox).toHaveCSS('height', '34px')

    const footerLinks = page.locator('//footer//a')
    await expect(footerLinks).toHaveCount(16)
    await page.pause()
})