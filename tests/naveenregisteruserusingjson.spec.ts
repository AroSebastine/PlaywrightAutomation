import { test, expect } from '@playwright/test'
import fs from 'fs'
import { naveenAutomationLabsLogin } from '../data/login.ts';
import { RegisterUserNaveen } from '../pages/registerusernaveen.ts';
import { randomEmailGenerator } from '../utils/general.ts'

interface userData {
    firstName: string,
    lastName: string,
    telephone: string,
    password: string
}

let userRegistrationData: userData[] = JSON.parse(fs.readFileSync('./data/naveenregisteruser.json', 'utf-8'));

for (const user of userRegistrationData) {
    test(`x: ${user.firstName}`, async ({ page }) => {
        await page.goto(naveenAutomationLabsLogin['register-url'])
        const registrationPage = new RegisterUserNaveen(page)
        await registrationPage.firstNameTextbox.fill(user.firstName)
        await registrationPage.lastNameTextbox.fill(user.lastName)        
        await registrationPage.emailTextbox.fill(randomEmailGenerator())
        await registrationPage.telephoneTextbox.fill(user.telephone)
        await registrationPage.passwordTextbox.fill(user.password)
        await registrationPage.passwordConfirmTextbox.fill(user.password)
        await registrationPage.yesRadioButton.click()
        await registrationPage.agreeCheckBox.check()
        await registrationPage.continueButton.click()        
    })
}