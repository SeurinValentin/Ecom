import { products } from './products.js';

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const cartLink = document.getElementById('cart-link');
    const cartPanel = document.getElementById('cart-panel');
    const closeCartBtn = document.getElementById('close-cart');
    
    displayProducts();
    
    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        openCartPanel();
    });

    closeCartBtn.addEventListener('click', closeCartPanel);

    document.getElementById('checkout').addEventListener('click', checkout);
});

function openCartPanel() {
    const cartPanel = document.getElementById('cart-panel');
    cartPanel.style.right = '0';
    updateCart();
}

function closeCartPanel() {
    const cartPanel = document.getElementById('cart-panel');
    cartPanel.style.right = '-300px';
}

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} €</p>
            <button onclick="addToCart(${product.id})">Ajouter au panier</button>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
        openCartPanel();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${item.price} €</p>
            </div>
        `;
        cartItems.appendChild(itemElement);
        total += item.price;
    });

    cartTotal.textContent = `Total: ${total.toFixed(2)} €`;
    cartCount.textContent = cart.length;
}

function checkout() {
    alert('Commande passée ! Total: ' + document.getElementById('cart-total').textContent);
    cart = [];
    updateCart();
    closeCartPanel();
}


window.addToCart = addToCart;