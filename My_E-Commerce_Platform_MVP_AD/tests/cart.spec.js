const { test, expect } = require('@playwright/test');

test.describe('Cart Management', () => {
  test.beforeEach(async ({ page }) => {
    const token = btoa(JSON.stringify({ email: 'user@example.com', exp: Date.now() + 3600000 }));
    await page.addInitScript((t) => {
      window.localStorage.setItem('token', t);
    }, token);
  });

  test('should add product to cart and update total', async ({ page }) => {
    await page.goto('/index.html');
    await page.click('button:has-text("Agregar al carrito")');

    await page.goto('/cart.html');
    await expect(page.locator('#cartItems')).toContainText('Camiseta Básica');
    const total = await page.locator('#total').textContent();
    expect(parseFloat(total)).toBeGreaterThan(0);
  });

  test('should show empty cart message when empty', async ({ page }) => {
    await page.goto('/cart.html');
    await expect(page.locator('#cartItems')).toContainText('El carrito está vacío');
  });
});
