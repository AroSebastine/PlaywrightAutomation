import { test, expect } from '@playwright/test'
import fs from 'fs'
import { naveenAutomationLabsLogin } from '../data/login.ts';
import { RegisterUserNaveen } from '../pages/registerusernaveen.ts';
import { randomEmailGenerator, randomUserDataGeneratorUsingFaker } from '../utilities/general.ts'
import { NaveensPageUserData } from '../types/naveensPageUserData.ts'
import { faker } from '@faker-js/faker'

function generateUser() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        telephone: faker.phone.number({ style: "national" }),
        password: faker.internet.password({ length: 15 })
    }

}

for(let i = 1; i <= 3; i++) {
    test(`register user using faker data: ${i}`, async ({ page }) => {

    const user = generateUser()
    
    await page.goto(naveenAutomationLabsLogin['register-url'])
    const registrationPage = new RegisterUserNaveen(page)
    await registrationPage.firstNameTextbox.fill(user.firstName)
    await registrationPage.lastNameTextbox.fill(user.lastName)
    await registrationPage.emailTextbox.fill(user.email)
    console.log(user.email);
    await registrationPage.telephoneTextbox.fill(user.telephone)
    await registrationPage.passwordTextbox.fill(user.password)
    await registrationPage.passwordConfirmTextbox.fill(user.password)
    await registrationPage.yesRadioButton.click()
    await registrationPage.agreeCheckBox.check()
    await registrationPage.continueButton.click()
    await page.pause()
})


}

