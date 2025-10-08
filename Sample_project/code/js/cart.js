function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const total = parseFloat(localStorage.getItem('cartTotal') || '0');
  const container = document.getElementById('cartItems');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (cart.length === 0) {
    container.innerHTML = '<p>El carrito está vacío.</p>';
    checkoutBtn.style.display = 'none';
  } else {
    container.innerHTML = '';
    const productMap = {};
    cart.forEach(id => {
      productMap[id] = (productMap[id] || 0) + 1;
    });

    const products = [
      { id: 1, name: 'Camiseta Básica', price: 19.99 },
      { id: 2, name: 'Zapatos Deportivos', price: 59.99 },
      { id: 3, name: 'Libro de JavaScript', price: 12.99 },
      { id: 4, name: 'Audífonos Bluetooth', price: 39.99 }
    ];

    Object.entries(productMap).forEach(([id, qty]) => {
      const p = products.find(p => p.id == id);
      if (p) {
        const el = document.createElement('div');
        el.innerHTML = `<p>${p.name} x${qty} — $${(p.price * qty).toFixed(2)}</p>`;
        container.appendChild(el);
      }
    });

    document.getElementById('total').textContent = total.toFixed(2);
    checkoutBtn.style.display = 'inline';
  }
}
