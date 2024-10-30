let cart = [];

function addToCart(service) {
    cart.push(service);
    updateCart();
    alert(`${service} добавлено в корзину!`);
}

function updateCart() {
    const cartElement = document.getElementById('cartList');
    cartElement.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = item;
        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger btn-sm';
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

function revealSecret(message) {
    alert(message);
}

// Обработка отправки формы
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('YOUR_FUNCTION_URL', { // Замените на URL вашей функции
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        if (response.ok) {
            alert('Сообщение отправлено!');
            this.reset(); // Сброс формы
        } else {
            alert('Ошибка при отправке сообщения.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});