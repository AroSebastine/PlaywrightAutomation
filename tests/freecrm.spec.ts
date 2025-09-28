import { test, expect } from '@playwright/test'
import * as login from '../data/login.ts'

test('free crm register a user', async({ page }) => {
    await page.goto(login.freeCRMLogin.url)

    const editionCombobox = page.getByRole('combobox')
    const firstNameTextbox = page.getByRole('textbox', { name: 'First Name' })
    const lastNameTextbox = page.getByRole('textbox', { name: 'Last Name' })
    const emailTextbox = page.getByRole('textbox', { name: 'Email', exact: true })
    const confirmEmailTextbox = page.getByRole('textbox', { name: 'Confirm Email' })
    const usernameTextbox = page.getByRole('textbox', { name: 'Username' })
    const passwordTextbox = page.getByRole('textbox', { name: 'Password', exact: true })
    const passwordConfirmTextbox = page.getByRole('textbox', { name: 'Confirm Password', exact: true })
    const agreeTermsAndConditionsCheckbox = page.getByRole('checkbox', { name: 'agree with the terms' })
    const submitButton = page.getByRole('button', { name: 'SUBMIT' })
    const companyInformationPageHeader = page.getByText('Your company information and profile detail')

    await editionCombobox.selectOption('1')
    
    await firstNameTextbox.fill('Aro')
    await lastNameTextbox.fill('Hendric')
    await emailTextbox.fill('aro.h@sv.com')
    await confirmEmailTextbox.fill('aro.h@sv.com')
    await usernameTextbox.fill('arohendric')
    await passwordTextbox.fill('Aro987!')
    await passwordConfirmTextbox.fill('Aro987!')
    await agreeTermsAndConditionsCheckbox.check()
    await submitButton.click()
    expect(await companyInformationPageHeader.innerText()).toContain('Your company information and profile detail')
    await page. pause()
    


    
})