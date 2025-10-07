import { FrameLocator, Locator, Page } from '@playwright/test'

export class CRMProPage {

    page: Page
    usernameTB: Locator
    passwordTB: Locator
    loginButton: Locator
    contactsLink: Locator
    newContactLink: Locator
    mainPanelFrame: FrameLocator
    

    constructor(page:Page) {
        this.page = page
        this.usernameTB = page.getByPlaceholder("Username")
        this.passwordTB = page.getByPlaceholder("Password")
        this.loginButton = page.getByRole('button', { name: "Login" })   
        this.mainPanelFrame = page.frameLocator('frame[name="mainpanel"]')
        this.contactsLink = this.mainPanelFrame.getByTitle('Contacts')
        this.newContactLink = this.mainPanelFrame.getByRole('link', { name: "New Contact" })        
    }    

    async login(username: string, password: string) {            
            await this.usernameTB.fill(username)
            await this.passwordTB.fill(password)
            await this.loginButton.click()
    }
}