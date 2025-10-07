import { test, expect } from '@playwright/test'
import * as login from '../data/login.ts'
import { CRMProPage } from '../pages/crmpro.ts'

test('crmpro create a new contact', async({ page }) => {

    await page.goto(login.freeCRMProLogin.url)
    const crmPro: CRMProPage = new CRMProPage(page)
    await page.getByPlaceholder("Username").fill(login.freeCRMProLogin.username)
    await page.getByPlaceholder("Password").fill(login.freeCRMProLogin.password)
    await page.getByRole('button', { name: "Login" }).click()

    // await page.frameLocator('frame[name="mainpanel"]').getByTitle('Contacts').waitFor( {state: "visible"} )
    await page.frameLocator('frame[name="mainpanel"]').getByTitle('Contacts').hover({ force: true })
    await page.frameLocator('frame[name="mainpanel"]').getByRole('link', { name: 'New Contact' }).click() 

})