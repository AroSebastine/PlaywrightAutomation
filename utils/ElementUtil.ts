import { Page, Locator } from '@playwright/test'
import { validateHeaderValue } from 'http'

type flexibleLocator = string | Locator

export class ElementUtil {

    page: Page
    defaultTimeout: number

    constructor(page: Page, timeout: number = 30000) {
        this.page = page
        this.defaultTimeout = timeout
    }

    private getLocator(locator: flexibleLocator): Locator {
        if (typeof locator === 'string') {
            return this.page.locator(locator)
        } else {
            return locator
        }
    }

    public async click(locator: flexibleLocator, options?: { force?: boolean, timeout?: number }): Promise<void> {
        await this.getLocator(locator).click({
            force: options?.force ?? false,
            timeout: options?.timeout ?? this.defaultTimeout
        })
    }

    public async rightClick(locator: flexibleLocator, options?: { force?: boolean, timeout?: number }): Promise<void> {
        await this.getLocator(locator).click({
            button: 'right',
            force: options?.force ?? false,
            timeout: options?.timeout ?? this.defaultTimeout
        })
    }

    public async doubleClick(locator: flexibleLocator, options?: { force?: boolean, timeout?: number }): Promise<void> {
        await this.getLocator(locator).dblclick({
            force: options?.force ?? false,
            timeout: options?.timeout ?? this.defaultTimeout
        })
    }

    public async fill(locator: flexibleLocator, text: string): Promise<void> {
        await this.getLocator(locator).fill(text, {
            timeout: this.defaultTimeout
        })
    }

    public async typeSlowly(locator: flexibleLocator, text: string, delay: number = 100): Promise<void> {
        await this.getLocator(locator).pressSequentially(text, {
            delay: delay,
            timeout: this.defaultTimeout
        })
    }

    public async clear(locator: flexibleLocator) {
        await this.getLocator(locator).clear()
    }

    public async isVisible(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isVisible()
    }

    public async isChecked(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isChecked()
    }

    public async isDisabled(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isDisabled()
    }

    public async isEditable(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isEditable()
    }

    public async isEnabled(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isEnabled()
    }

    public async isHidden(locator: flexibleLocator): Promise<boolean> {
        return await this.getLocator(locator).isHidden()
    }

    public async waitForElementVisible(locator: flexibleLocator): Promise<boolean> {
        try {
            await this.getLocator(locator).waitFor({ state: 'visible' })
            return true

        } catch {
            return false
        }
    }

    public async waitForElementAttached(locator: flexibleLocator): Promise<boolean> {
        try {
            await this.getLocator(locator).waitFor({ state: 'attached' })
            return true

        } catch {
            return false
        }
    }

    public async waitForElementDetached(locator: flexibleLocator): Promise<boolean> {
        try {
            await this.getLocator(locator).waitFor({ state: 'detached' })
            return true

        } catch {
            return false
        }
    }

    public async waitForElementHidden(locator: flexibleLocator): Promise<boolean> {
        try {
            await this.getLocator(locator).waitFor({ state: 'hidden' })
            return true

        } catch {
            return false
        }
    }

    public async waitForPageLoad(state: 'load' | 'domcontentloaded' | 'networkidle' = 'load'): Promise<void> {
        await this.page.waitForLoadState(state)
    }

    public async sleep(timeout: number) {
        await this.page.waitForTimeout(timeout)
    }

    public async getText(locator: flexibleLocator): Promise<string | undefined> {
        const text = await this.getLocator(locator).textContent()
        return text?.trim()
    }

    public async getInnerText(locator: flexibleLocator): Promise<string | undefined> {
        const text = await this.getLocator(locator).innerText()
        return text?.trim()
    }

    public async getAttribute(locator: flexibleLocator, name: string): Promise<string | null> {
        return await this.getLocator(locator).getAttribute('name')
    }

    public async getEnteredValue(locator: flexibleLocator): Promise<string> {
        return await this.getLocator(locator).inputValue()
    }

    public async getAllInnerTexts(locator: flexibleLocator): Promise<string[]> {
        return await this.getLocator(locator).allInnerTexts()
    }

    public async selectDropdownValue(locator: flexibleLocator, byType: 'value' | 'label' | 'index', selector: number | number[] | string | string[]): Promise<void> {
        if (byType === 'value') {
            await this.getLocator(locator).selectOption(selector as string | string[])
        } else if (byType === 'label') {
            await this.getLocator(locator).selectOption({ label: selector as string })
        } else if (byType === 'index') {
            if (typeof selector === 'number') {
                await this.getLocator(locator).selectOption({ index: selector as number })
            }
            if (Array.isArray(selector)) {
                const indexesToSelect: { index: number }[] = selector.map(i => ({ index: Number(i) }))
                await this.getLocator(locator).selectOption(indexesToSelect)
            }
        }
    }

    public async selectByLabel(locator: flexibleLocator, label: string | string[]): Promise<void> {
        if (Array.isArray(label)) {
            const labelToSelect: { label: string }[] = label.map(i => ({ label: i }))
            await this.getLocator(locator).selectOption(labelToSelect)
        } else {
            await this.getLocator(locator).selectOption({ label: label })
        }
    }

    public async selectByIndex(locator: flexibleLocator, index: number | number[]): Promise<void> {
        if (Array.isArray(index)) {
            const indexToSelect: { index: number }[] = index.map(i => ({ index: i }))
            await this.getLocator(locator).selectOption(indexToSelect)
        } else {
            await this.getLocator(locator).selectOption({ index: index })
        }
    }

    public async selectByValue(locator: flexibleLocator, value: string | string[]): Promise<void> {
        if (Array.isArray(value)) {
            const valueToSelect: { value: string }[] = value.map(i => ({ value: i }))
            await this.getLocator(locator).selectOption(valueToSelect)
        } else {
            await this.getLocator(locator).selectOption({ value: value })
        }
    }




}