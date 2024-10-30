let cart = [];

function addToCart(service) {
    cart.push(service);
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.onclick = () => {
            cart.splice(index, 1);
            updateCart();
        };
        li.appendChild(removeButton);
        cartElement.appendChild(li);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    const name = prompt('Введите ваше имя:');
    const email = prompt('Введите ваш email:');
    alert(`Спасибо, ${name}! Ваш заказ оформлен.`);
    cart = [];
    updateCart();
}