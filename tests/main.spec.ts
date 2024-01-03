import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "count is" }).click();

  const button = page.getByRole("button", { name: "count is" });
  await expect(button).toHaveText("count is 1");
});
