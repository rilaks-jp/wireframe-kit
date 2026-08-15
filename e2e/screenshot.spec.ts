import { test } from "@playwright/test";

// PC: 1440px / SP: 390px の2サイズでフルページスクリーンショットを撮る。
const viewports = [
  { name: "pc-1440", width: 1440, height: 900 },
  { name: "sp-390", width: 390, height: 844 },
];

const pages = [{ name: "top", path: "/" }];

for (const page of pages) {
  for (const viewport of viewports) {
    test(`screenshot: ${page.name} (${viewport.name})`, async ({ page: pw }) => {
      await pw.setViewportSize({ width: viewport.width, height: viewport.height });
      await pw.goto(page.path);
      await pw.waitForLoadState("networkidle");
      await pw.screenshot({
        path: `screenshots/${page.name}-${viewport.name}.png`,
        fullPage: true,
      });
    });
  }
}
