if (!['login.html', 'register.html'].includes(window.location.pathname.split('/').pop())) {
  if (!isAuthenticated()) {
    window.location.href = 'login.html';
  } else {
    const btn = document.getElementById('logoutBtn');
    if (btn) btn.style.display = 'inline';
  }
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));

  const products = [
    { id: 1, name: 'Camiseta Básica', price: 19.99 },
    { id: 2, name: 'Zapatos Deportivos', price: 59.99 },
    { id: 3, name: 'Libro de JavaScript', price: 12.99 },
    { id: 4, name: 'Audífonos Bluetooth', price: 39.99 }
  ];
  const total = cart.reduce((sum, id) => {
    const p = products.find(p => p.id === id);
    return sum + (p ? p.price : 0);
  }, 0);
  localStorage.setItem('cartTotal', total.toFixed(2));
  alert('Producto agregado al carrito');
}
