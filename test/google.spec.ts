describe('Google', () => {

    beforeAll(async () => {
        await page.goto('https://google.com');
    });

    it('Googleの表示', async () => {
        await expect(page).toMatch('google');
    });

    it('Googleを検索', async () => {
        await expect(page).toFill('input[name="q"]', 'Google');
        const navigationPromise = page.waitForNavigation()
        await expect(page).toClick('input[type="submit"]');
        await navigationPromise
        await new Promise((resolve) => setTimeout(resolve, 3000));
    });

});
