import { test, expect } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'

test('Check mandatory field and ensure registration is successful when all required fields are filled in',
    async ({ page }) => {

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

        const registerAccountHeader = page.getByRole('heading', { name: 'Register Account' })
        const yourPersonalDetailsLegend = page.getByText('Your Personal Details')
        const firstNameTextbox = page.getByRole('textbox', { name: 'First Name' })
        const lastNameTextbox = page.getByRole('textbox', { name: 'Last Name' })
        const emailTextbox = page.getByRole('textbox', { name: 'E-Mail' })
        const telephoneTextbox = page.getByRole('textbox', { name: 'Telephone' })
        const passwordTextbox = page.getByRole('textbox', { name: '* Password', exact: true })
        const passwordConfirmTextbox = page.getByRole('textbox', { name: 'Password Confirm' })
        const yesRadioButton = page.getByRole('radio', { name: 'Yes' })
        const agreeCheckBox = page.getByRole('checkbox')
        const continueButton = page.getByRole('button', { name: 'Continue' })
        const privacyPolicyCheckboxRequiredErrorMessage = page.getByText('You must agree to the Privacy Policy')
        const firstNameRequiredErrorMessage = page.getByText('First Name must be between 1 and 32 characters!')
        const lastNameRequiredErrorMessage = page.getByText('Last Name must be between 1 and 32 characters!')
        const emailAddressRequiredErrorMessage = page.getByText('E-Mail Address does not appear to be valid!')
        const telephoneRequiredErrorMessage = page.getByText('Telephone must be between 3 and 32 characters!')
        const passwordRequiredErrorMessage = page.getByText('Password must be between 4 and 20 characters!')
        const accountRegistrationSuccessMessage = page.getByRole('heading', { name: 'Your Account Has Been Created!' }) 

        console.log(await registerAccountHeader.innerText());
        await expect(registerAccountHeader).toBeVisible()
        await expect(yourPersonalDetailsLegend).toBeVisible()

        await continueButton.click()
        await expect(privacyPolicyCheckboxRequiredErrorMessage).toBeVisible()
        await expect(firstNameRequiredErrorMessage).toBeVisible()
        await expect(lastNameRequiredErrorMessage).toBeVisible()
        await expect(emailAddressRequiredErrorMessage).toBeVisible()
        await expect(telephoneRequiredErrorMessage).toBeVisible()
        await expect(passwordRequiredErrorMessage).toBeVisible()

        await firstNameTextbox.fill('Aro')
        await lastNameTextbox.fill('Hendric')
        await emailTextbox.fill(naveenAutomationLabsLogin.username)
        await telephoneTextbox.fill('9677122803')
        await passwordTextbox.fill(naveenAutomationLabsLogin.password)
        await passwordConfirmTextbox.fill(naveenAutomationLabsLogin.password)
        await yesRadioButton.click()
        await agreeCheckBox.click()
        await continueButton.click()

        expect(accountRegistrationSuccessMessage).toBeVisible()

        await page.pause()

        


    })

