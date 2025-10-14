import { test, expect } from '@playwright/test';

test('test 1', async ({ page }) => {
    await page.goto('https://www.orangehrm.com/', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'Allow all' }).click();
    await page.getByRole('link', { name: 'Pricing' }).click();
    //   await page.goto('https://www.orangehrm.com/en/pricing');
    // await page.locator('a').filter({ hasText: 'Get Pricing' }).scrollIntoViewIfNeeded()
    // await page.waitForTimeout(2000)
    await page.locator('a').filter({ hasText: 'Get Pricing' }).click();
});

test('test 2', async ({ page }) => {
    await page.goto('https://www.orangehrm.com/', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'Allow all' }).click();
    await page.getByRole('link', { name: 'Pricing' }).click();
    //   await page.goto('https://www.orangehrm.com/en/pricing');
    await page.locator('a').filter({ hasText: '--Get Pricing' }).scrollIntoViewIfNeeded()
    // await page.waitForTimeout(2000)
    await page.locator('a').filter({ hasText: '--Get Pricing' }).click();
});

test('test 3', async ({ page }) => {
    await page.goto('https://www.orangehrm.com/', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'Allow allx' }).click();
    await page.getByRole('link', { name: 'Pricing' }).click();
    //   await page.goto('https://www.orangehrm.com/en/pricing');
    await page.locator('a').filter({ hasText: 'Get Pricing' }).scrollIntoViewIfNeeded()
    // await page.waitForTimeout(2000)
    await page.locator('a').filter({ hasText: 'Get Pricing' }).click();
});