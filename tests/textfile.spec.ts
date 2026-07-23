import { chromium, expect, test } from "@playwright/test";
import path from "path";

// test.skip(
//   !!process.env.CI,
//   'Persistent Chrome profile test is skipped in CI'
// );
test("MakeMyTrip using persistent Chrome", async () => {
  const profilePath = path.join(
    process.cwd(),
    "playwright-chrome-profile"
  );

  const context = await chromium.launchPersistentContext(profilePath, {
    channel: "chrome",
    headless: false,
    viewport: {
      width: 1440,
      height: 900
    },
    locale: "en-IN",
    timezoneId: "Asia/Kolkata"
  });

  const page =
    context.pages()[0] ?? await context.newPage();

  await page.goto("https://www.makemytrip.com/flights/");

  await page.pause();

  await context.close();
});