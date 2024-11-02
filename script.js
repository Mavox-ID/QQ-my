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

    // Генерация случайного кода верификации
    const verificationCode = Math.floor(100000 + Math.random() * 900000); // Генерация 6-значного кода

    // Формирование сообщения
    const orderDetails = `Спасибо, ${name}! Вы заказали:\n${cart.join(', ')}\n\nВаш код верификации: ${verificationCode}\n\nПожалуйста, напишите мне на почту для заказа: admin@qq-my.pp.ua (если ви заказиваете домен то для управлением домена пишите на code@qq-my.pp.ua, введите следующее: Тема: help, текст: /help <Ваш код верефикации> после етого ждите пока ви получете подробно что как почему и так далее для управление домена, команди и так далее!)`;

    alert(orderDetails);

    // Очистка корзины
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
            alert('Ошибка при отправке сообщения. Возможно Функция временно недоступна');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});