import { test, expect } from '@playwright/test'
import { naveenAutomationLabsLogin } from '../data/login.ts'
import { RegisterUserNaveen } from '../pages/registerusernaveen.ts'

const userDetails = [
    {
        firstName: "Aro",
        lastName: "Hendric",
        email: "aro@sv.com",
        telephone: "0468810203",
        password: "Aro987!",
    },
    {
        firstName: "Ciara",
        lastName: "Aro",
        email: "ciara@sv.com",
        telephone: "9677122801",
        password: "Cia987!",
    },
]

for (const user of userDetails) {
    test(`register new user for Dear ${user.firstName}`, async ({ page }) => {
        await page.goto(naveenAutomationLabsLogin['register-url'])
        const registrationPage = new RegisterUserNaveen(page)
        await registrationPage.firstNameTextbox.fill(user.firstName)
        await registrationPage.lastNameTextbox.fill(user.lastName)
        await registrationPage.emailTextbox.fill(user.email)
        await registrationPage.telephoneTextbox.fill(user.telephone)
        await registrationPage.passwordTextbox.fill(user.password)
        await registrationPage.passwordConfirmTextbox.fill(user.password)
        await registrationPage.yesRadioButton.click()
        await registrationPage.agreeCheckBox.check()
        await registrationPage.continueButton.click()
    })
}