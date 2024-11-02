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
    const orderDetails = `Спасибо, ${name}! Вы заказали: ${cart.join(', ')}\nВаш код верификации: ${verificationCode}\n\nСпасибо за заказ! Отправьте, пожалуйста, форму по ссылке: https://formsubmit.co/el/refiwu тему: Заказ №${verificationCode} текст: что вы заказывали и если, например, сайт, то ваш комментарий, например, сделайте сайт красивым и так далее!`;

    // Отображение сообщения на весь экран
    const messageContainer = document.createElement('div');
    messageContainer.style.position = 'fixed';
    messageContainer.style.top = '0';
    messageContainer.style.left = '0';
    messageContainer.style.width = '100%';
    messageContainer.style.height = '100%';
    messageContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    messageContainer.style.color = 'white';
    messageContainer.style.display = 'flex';
    messageContainer.style.alignItems = 'center';
    messageContainer.style.justifyContent = 'center';
    messageContainer.style.zIndex = '1000';
    messageContainer.innerHTML = `
        <div style="text-align: center;">
            <h2>Спасибо, ${name}!</h2>
            <p>Вы заказали: ${cart.join(', ')}</p>
            <p>Ваш код верификации: ${verificationCode}</p>
            <p>Спасибо за заказ!</p>
            <p>Отправьте, пожалуйста, форму по ссылке: <a href="https://formsubmit.co/el/refiwu" style="color: lightblue;">https://formsubmit.co/el/refiwu</a></p>
            <p>Укажите там: Тема: Заказ №${verificationCode} текст: <введите информацию о себе и что ви заказали> также сли ви заказали например сайт то напишите комментарий что ви хотите чтоби ми зделали зделать например сайт ярким и так далее!</p>
            <button id="closeMessage" style="margin-top: 20px; padding: 10px 20px; font-size: 16px;">OK</button>
        </div>
    `;

    document.body.appendChild(messageContainer);

    // Обработчик кнопки закрытия
    document.getElementById('closeMessage').onclick = function() {
        document.body.removeChild(messageContainer);
    };

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