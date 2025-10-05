const { test, expect } = require('@playwright/test');

test.describe('User Authentication', () => {
  test('should allow user registration (simulated)', async ({ page }) => {
    await page.goto('/register.html');
    await page.fill('#name', 'Test User');
    await page.fill('#regEmail', 'user@example.com');
    await page.fill('#regPassword', '123456');
    await page.click('button[type="submit"]');
    
    await expect(page).toHaveURL('/login.html');
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.goto('/login.html');
    await page.fill('#email', 'user@example.com');
    await page.fill('#password', '123456');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/index.html');
    await expect(page.locator('#logoutBtn')).toBeVisible();
  });

  test('should show error on invalid login', async ({ page }) => {
    await page.goto('/login.html');
    await page.fill('#email', 'wrong@example.com');
    await page.fill('#password', 'wrong');
    await page.click('button[type="submit"]');

    await expect(page.locator('#error')).toBeVisible();
    await expect(page.locator('#error')).toHaveText('Credenciales inválidas');
  });
});
