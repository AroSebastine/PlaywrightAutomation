import { Page, Locator } from '@playwright/test'

export class RegisterUserNaveen {
    page: Page
    firstNameTextbox: Locator
    lastNameTextbox: Locator
    emailTextbox: Locator
    telephoneTextbox: Locator
    passwordTextbox: Locator
    passwordConfirmTextbox: Locator
    yesRadioButton: Locator
    agreeCheckBox: Locator
    continueButton: Locator

    constructor(page: Page) {
        this.page = page
        this.firstNameTextbox = page.getByRole('textbox', { name: 'First Name' })
        this.lastNameTextbox = page.getByRole('textbox', { name: 'Last Name' })
        this.emailTextbox = page.getByRole('textbox', { name: 'E-Mail' })
        this.telephoneTextbox = page.getByRole('textbox', { name: 'Telephone' })
        this.passwordTextbox = page.getByRole('textbox', { name: '* Password', exact: true })
        this.passwordConfirmTextbox = page.getByRole('textbox', { name: 'Password Confirm' })
        this.yesRadioButton = page.getByRole('radio', { name: 'Yes' })
        this.agreeCheckBox = page.getByRole('checkbox')
        this.continueButton = page.getByRole('button', { name: 'Continue' })
    }

}