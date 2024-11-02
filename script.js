let cart = [];

// Добавление услуги в корзину
function addToCart(service) {
    cart.push(service);
    updateCart();
    alert(`${service} добавлено в корзину!`);
}

// Обновление отображения корзины
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

// Оформление заказа
function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const clientMessage = document.getElementById('clientMessage').value; // Сообщение от клиента
    const orderDetails = cart.join(', '); // Детали заказа

    // Отправка уведомления на почту
    fetch('send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            clientMessage: clientMessage,
            orderDetails: orderDetails
        })
    }).then(response => {
        if (response.ok) {
            alert('Заказ отправлен!');
            cart = []; // Очистка корзины после отправки
            updateCart();
        } else {
            alert('Ошибка при отправке заказа.');
        }
    });
}

// Переключение языка
let isEnglish = false;

function toggleLanguage() {
    isEnglish = !isEnglish;
    document.getElementById('languageToggle').innerText = isEnglish ? 'Перевести на русский' : 'Switch to English';
    
    // Переключение текста на английский или русский
    const elements = document.querySelectorAll('[data-original]');
    elements.forEach(el => {
        el.innerText = isEnglish ? el.getAttribute('data-translate') : el.getAttribute('data-original');
    });
}