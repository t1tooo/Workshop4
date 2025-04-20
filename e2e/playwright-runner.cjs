const { chromium } = require('@playwright/test');

module.exports = {
  runPlaywrightTest,
};

async function runPlaywrightTest() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Global timeout på 2 minuter
  page.setDefaultTimeout(120000);

  try {
    console.log("Running Playwright test...");

    console.log("Navigating to: Frukt och Grönt");
    await page.goto("http://127.0.0.1:4000/kategori/frukt-och-gront");

    console.log("Navigating to: Kött, chark & fågel");
    await page.getByRole("link", { name: "Kött, chark & fågel" }).click();

    console.log("Navigating to: Fågel (heading)");
    await page.getByRole("heading", { name: "Fågel" }).click();

    console.log("Navigating to: Mejeri, ost & ägg");
    await page.getByRole("link", { name: "Mejeri, ost & ägg" }).click();

    console.log("Clicking on: Rich & Creamy Bavaria Blu 44%");
    await page.getByText("Rich & Creamy Bavaria Blu 44%").click();

    console.log("Clicking on: Main image (img)");
    await page.getByRole("img").click();

    console.log("Navigating to: Ägg (exact)");
    await page.getByRole("link", { name: "Ägg", exact: true }).click();

    console.log("Navigating to: Ägg 24p Frigående Inomhus Medium");
    await page
      .locator("div")
      .filter({ hasText: /^Ägg 24p Frigående Inomhus Medium59,90 kr$/ })
      .getByRole("heading")
      .click();

    console.log("Navigating to: Fisk & Skaldjur");
    await page.getByRole("link", { name: "Fisk & Skaldjur" }).click();

    console.log("Navigating to: Fisk");
    await page.getByRole("link", { name: "Fisk", exact: true }).click();

    console.log("Clicking on: Gravad Lax Skivad");
    await page
      .locator("div")
      .filter({ hasText: /^Pangasius Frysta38,90 kr$/ })
      .getByRole("img")
      .click();

    console.log("Navigating to: Glass, godis & snacks");
    await page.getByRole("link", { name: "Glass, godis & snacks" }).click();

    console.log("Navigating to: Godis");
    await page.getByRole("link", { name: "Godis", exact: true }).click();

    console.log("Clicking on: Cream Candies Original");
    await page
      .locator("div")
      .filter({ hasText: /^Cream Candies Original18,90 kr$/ })
      .getByRole("img")
      .click({ button: "right" });

    console.log("Clicking on: Choklad");
    await page.getByRole("link", { name: "Choklad" }).dblclick();

    console.log("Navigating to: Chokladpåsar");
    await page.getByRole("link", { name: "Chokladpåsar", exact: true }).click();

    console.log("Clicking on: Smash");
    await page
      .locator("div")
      .filter({ hasText: /^Smash28,90 kr$/ })
      .getByRole("img")
      .click();

    console.log("Navigating to: Tobak");
    await page.getByRole("link", { name: "Tobak" }).click();
  
    console.log("Navigating to: Nikotinportioner");
    await page.getByRole("link", { name: "Nikotinportioner" }).click();
  
    console.log("Clicking on: Velo Freezing Peppermint Tobaksfritt Snus");
    await page
        .locator("div")
        .filter({
          hasText: /^Velo Freezing Peppermint Tobaksfritt Snus41,90 kr$/,
        })
        .getByRole("heading")
        .click();

    console.log("Navigating to: Djur");
    await page.getByRole("link", { name: "Djur", exact: true }).click();

    console.log("Navigating to: Hund");
    await page.getByRole("link", { name: "Hund" }).click();

    console.log("Navigating to: Hundbajspåsar (heading)");
    await page
      .getByRole("heading", { name: "Hundbajspåsar" })
      .click();

    console.log("Playwright test completed successfully.");
  } catch (error) {
    console.error("Error running Playwright test:", error);
  } finally {
    await browser.close();
  }
}