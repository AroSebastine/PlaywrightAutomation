import { Locator, Page } from "@playwright/test"

export class NaveenRetailStore {

    usernameTextbox: Locator
    passwordTextbox: Locator
    loginButton: Locator
    searchTextbox: Locator
    searchButton: Locator
    allRightNavigationLinks: Locator


    constructor(page: Page) {
        this.usernameTextbox = page.getByLabel("E-Mail Address")
        this.passwordTextbox = page.getByLabel("Password")
        this.loginButton = page.getByRole('button', { name: "Login" }) 
        this.searchTextbox = page.getByPlaceholder('Search')
        this.searchButton = page.locator(".btn-default.btn-lg")
        this.allRightNavigationLinks = page.locator('a.list-group-item')
    }
 
}

