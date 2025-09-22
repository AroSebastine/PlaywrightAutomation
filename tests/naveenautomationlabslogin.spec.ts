import { test, expect } from '@playwright/test'

test('Forgotten password test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    const forgottenPasswordLink = page.getByRole('link', { name: 'Forgotten Password' }).first()
    const forgottenPasswordPageHeader = page.getByRole('heading', { name: 'Forgot Your Password?', level: 1 })

    await forgottenPasswordLink.click()
    expect(await forgottenPasswordPageHeader.innerText()).toBe('Forgot Your Password?')
})

test('Invalid credentials test', async({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    const emailAddressTextbox = page.getByRole('textbox', { name: 'E-Mail Address' })
    const passwordTextbox = page.getByRole('textbox', { name: 'Password' })
    const loginButton = page.getByRole('button', { name: 'Login' })
    const invalidCredentialsErrorMessage = page.getByText('Warning: No match for E-Mail Address and/or Password.')

    await emailAddressTextbox.fill('invalid@gmail.cx')
    await passwordTextbox.fill('dnada')
    await loginButton.click()

    expect(await invalidCredentialsErrorMessage.innerText()).toContain('Warning: No match for E-Mail Address and/or Password')
})