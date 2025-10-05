const { test, expect } = require('@playwright/test');

test.describe('Secure Checkout', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('token', btoa(JSON.stringify({ email: 'user@example.com', exp: Date.now() + 3600000 })));
      localStorage.setItem('cart', '[1]');
      localStorage.setItem('cartTotal', '19.99');
    });
  });

  test('should simulate successful payment', async ({ page }) => {
    await page.goto('/checkout.html');
    await page.fill('input[placeholder="Nombre en tarjeta"]', 'Test User');
    await page.fill('input[placeholder="Número de tarjeta"]', '4242 4242 4242 4242');
    await page.fill('input[placeholder="MM/AA"]', '12/30');
    await page.fill('input[placeholder="CVV"]', '123');
    await page.click('#payBtn');

    await expect(page.locator('#result')).toHaveText('✅ Pago exitoso. ¡Gracias por tu compra!');
  });
});
