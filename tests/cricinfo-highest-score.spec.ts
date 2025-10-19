import { test, expect, Locator } from '@playwright/test'

test('highest cricinfo score test', async ({ page }) => {
    await page.goto('https://www.espncricinfo.com/series/sheffield-shield-2025-26-1495274/south-australia-vs-queensland-6th-match-1495284/live-cricket-score')
    await page.locator(`//a[contains(@href,'full-scorecard') and contains(@href,'south-australia')]`).first().click()

    await page.on('framenavigated', async () => {
        const notAllowCricUpdates = page.locator('#wzrk-cancel')
        if (await notAllowCricUpdates.isVisible()) {
            await notAllowCricUpdates.click()
        }
    })


    const allBatsmenScore = page
    .locator(`//span[text()='Queensland']/following-sibling::span[contains(., '1st Innings')]/parent::span/parent::div/../following-sibling::div/table[contains(@class,'ci-scorecard-table')]/tbody/tr`)

    await allBatsmenScore.first().waitFor({ state: 'visible' })
    const allScore = await allBatsmenScore.all()

    let i = 0

    type Player = {
        name: string,
        score: number
    }

    let playersScores: Player[] = []

    for (let score of allScore) {
        i++
        if (i < 12) {      
            playersScores.push({
                name: await score.locator('td span span').first().innerText(),
                score: Number(await score.locator('td').nth(2).innerText())
            })
        }
    }

    const topScorer = playersScores.reduce((max, player) =>
        player.score > max.score ? player : max
    );

    console.log(`Highest score: ${topScorer.score}; Scored by: ${topScorer.name}`);

    await page.pause()


})