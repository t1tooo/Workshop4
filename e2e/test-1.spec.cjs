const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('http://localhost:4000/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Kött, chark & fågel' }).click();
  await page.getByRole('heading', { name: 'Fågel' }).click();
  await page.getByRole('link', { name: 'Mejeri, ost & ägg' }).click();
  await page.getByText('Rich & Creamy Bavaria Blu 44%').click();
  await page.getByRole('img').click();
  await page.getByRole('link', { name: 'Ägg', exact: true }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Ägg 24p Frigående Inomhus Medium59,90 kr$/ })
    .getByRole('heading')
    .click();
  await page.getByRole('link', { name: 'Fisk & Skaldjur' }).click();
  await page.getByRole('link', { name: 'Fisk' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Pangasius Frysta38,90 kr$/ })
    .getByRole('img')
    .click();
  await page.getByRole('link', { name: 'Glass, godis & snacks' }).click();
  await page.getByRole('link', { name: 'Godis' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Cream Candies Original18,90 kr$/ })
    .getByRole('img')
    .click({ button: 'right' });
  await page.getByRole('link', { name: 'Choklad' }).dblclick();
  await page.getByRole('link', { name: 'Chokladpåsar', exact: true }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Smash28,90 kr$/ })
    .getByRole('img')
    .click();
    await page.getByRole('link', { name: 'Tobak' }).click();
    await page.getByRole('link', { name: 'Nikotinportioner' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Velo Freezing Peppermint Tobaksfritt Snus41,90 kr$/ })
      .getByRole('heading')
      .click();
  await page.getByRole('link', { name: 'Djur', exact: true }).click();
  await page.getByRole('link', { name: 'Hund' }).click();
  await page.getByRole('heading', { name: 'Hundbajspåsar' }).click();
});