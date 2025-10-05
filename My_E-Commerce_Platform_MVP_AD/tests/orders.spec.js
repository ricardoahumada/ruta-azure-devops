const { test, expect } = require('@playwright/test');

test.describe('Order History', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('token', btoa(JSON.stringify({ email: 'user@example.com', exp: Date.now() + 3600000 })));
      localStorage.setItem('orders', JSON.stringify([
        { id: 1001, date: '2024-06-01', total: 19.99 }
      ]));
    });
  });

  test('should display order history', async ({ page }) => {
    await page.goto('/orders.html');
    await expect(page.locator('#ordersList')).toContainText('Orden #1001');
    await expect(page.locator('#ordersList')).toContainText('$19.99');
  });

  test('should show empty message when no orders', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('orders', '[]');
    });
    await page.goto('/orders.html');
    await expect(page.locator('#ordersList')).toContainText('No tienes órdenes aún');
  });
});
