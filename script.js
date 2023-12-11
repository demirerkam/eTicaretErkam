document.addEventListener('DOMContentLoaded', function () {
    // Örnek ürün verileri
    const products = [
      { id: 1, name: 'Ürün 1', price: 19.99 },
      { id: 2, name: 'Ürün 2', price: 29.99 },
      { id: 3, name: 'Ürün 3', price: 39.99 },
    ];
  
    // Ürünleri ekrana ekle
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Fiyat: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Sepete Ekle</button>
      `;
      productsContainer.appendChild(productElement);
    });
  
    // Sepet öğelerini tutan dizi
    const cartItems = [];
  
    // Sepete ürün ekleme fonksiyonu
    window.addToCart = function (id, name, price) {
      const cartItem = { id, name, price };
      cartItems.push(cartItem);
  
      // Sepet güncelleme fonksiyonunu çağır
      updateCart();
    };
  
    // Sepeti güncelleme fonksiyonu
    function updateCart() {
      const cartContainer = document.getElementById('cart-items');
      const totalElement = document.getElementById('total');
  
      // Sepetteki öğeleri temizle
      cartContainer.innerHTML = '';
  
      // Sepetteki her öğeyi ekle
      let total = 0;
      cartItems.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartContainer.appendChild(cartItemElement);
  
        // Toplam tutarı güncelle
        total += item.price;
      });
  
      // Toplam tutarı ekrana yazdır
      totalElement.textContent = `Toplam: $${total.toFixed(2)}`;
    }
  });