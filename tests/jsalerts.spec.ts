import { test, expect } from '@playwright/test'

test('js alerts tests', async({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // alert - only OK button

    // confirm - OK and Cancel buttons

    // prompt - requests an user input  + OK and Cancel

    page.on('dialog', async(dialog) => {
        console.log(dialog.message());
        console.log(dialog.type());
        // await dialog.accept()
        // await dialog.dismiss()
        await dialog.accept('Aro is smart')
    })

    await page.getByRole('button', { name: "Click for JS Alert" }).click()
    await page.getByRole('button', { name: "Click for JS Confirm" }).click()
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: "Click for JS Prompt" }).click()

    await page.pause()

})