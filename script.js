let cart = [];
let orders = []; // Массив для хранения информации о заказах

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

    // Генерация случайного кода верификации
    const verificationCode = Math.floor(100000 + Math.random() * 900000); // Генерация 6-значного кода

    // Формирование сообщения
    const orderDetails = `Спасибо, ${name}! Вы заказали: ${cart.join(', ')}\nВаш код верификации: ${verificationCode}\n\nСпасибо за заказ! Отправьте, пожалуйста, форму по ссылке: https://formsubmit.co/el/refiwu тему: Заказ №${verificationCode} текст: что вы заказывали и если, например, сайт, то ваш комментарий, например, сделайте сайт красивым и так далее!`;

    // Сохранение информации о заказе
    const orderInfo = {
        name: name,
        items: cart.join(', '),
        verificationCode: verificationCode,
        timestamp: new Date().toLocaleString() // Время заказа
    };
    orders.push(orderInfo); // Добавление заказа в массив

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
            <p>Отправьте пожалуйста, форму по ссылке: <a href="#tally-open=mJV6xY&tally-layout=modal&tally-width=700" style="color: lightblue;">Заказать</a></p>
            <p>Перед тем как перейти к оформлению заказа, обязательно сохраните код верификации, сделайте снимок экрана и запишите другие данные, которые могут понадобиться при заполнении формы.</p>
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

function writeReview() {
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
            <h2>Привет!</h2>
            <p>Чтобы оставить отзыв, напишите его на странице:</p>
            <p><a href="#tally-open=wo0yZ5&tally-layout=modal&tally-width=700" style="color: lightblue;">Оставить одзыв</a></p>
            <button id="closeMessage" style="margin-top: 20px; padding: 10px 20px; font-size: 16px;">OK</button>
        </div>
    `;

    document.body.appendChild(messageContainer);

    // Обработчик кнопки закрытия
    document.getElementById('closeMessage').onclick = function() {
        document.body.removeChild(messageContainer);
    };
}

function rrr() {
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
            <h2>Внимание!</h2>
            <p>Ви хотите перейти в консоль QQ-my!</p>
            <p>Следующяя опция предназначена для администрации QQ-my, если ви администратор то смело нажимайте на силлку а если нет то не медленно нажмите на кнопку закрить ниже!</p>
            <p>Консоль QQ-my:</p>
            <p><a href="https://qq-my.pp.ua/r.html" style="color: lightblue;">Консоль QQ-my (Только для администрации)</a></p>
            <button id="closeMessage" style="margin-top: 20px; padding: 10px 20px; font-size: 16px;">Закрить</button>
        </div>
    `;

    document.body.appendChild(messageContainer);

    // Обработчик кнопки закрытия
    document.getElementById('closeMessage').onclick = function() {
        document.body.removeChild(messageContainer);
    };
}

function revealSecret(message) {
    alert(message);
}

