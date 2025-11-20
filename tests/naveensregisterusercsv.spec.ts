import { test, expect } from '@playwright/test'
import fs from 'fs'
import { naveenAutomationLabsLogin } from '../data/login.ts';
import { RegisterUserNaveen } from '../pages/registerusernaveen.ts';
import { randomEmailGenerator } from '../utilities/general.ts'
import { NaveensPageUserData } from '../types/naveensPageUserData.ts';
import { parse } from 'csv-parse/sync'


// let userRegistrationData: NaveensPageUserData[] = JSON.parse(fs.readFileSync('./data/naveenregisteruser.json', 'utf-8'));

let fileContent = fs.readFileSync('./data/naveenuserdata.csv', 'utf-8')
let userRegistrationData: NaveensPageUserData[] = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
})

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