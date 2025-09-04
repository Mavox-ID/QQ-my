let cart = [];
let orders = [];

function addToCart(service) {
    cart.push(service);
    updateCart();
    alert(`${service} Add to cart!`);
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
        removeButton.textContent = 'Delete';
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
        alert('Cart empty!');
        return;
    }

    const name = prompt('Enter your name:');

    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    const orderDetails = `Thank you, ${name}! You ordered: ${cart.join(', ')}\nYour verification code: ${verificationCode}\n\nThank you for your order! Please submit the form at the link: https://formsubmit.co/el/refiwu Subject: Order #${verificationCode} Text: What did you order and if, for example, a website, then your comment, for example, make the website beautiful and so on!`;

    const orderInfo = {
        name: name,
        items: cart.join(', '),
        verificationCode: verificationCode,
        timestamp: new Date().toLocaleString()
    };
    orders.push(orderInfo);

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
<h2>Thank you, ${name}!</h2>
<p>You ordered: ${cart.join(', ')}</p>
<p>Your verification code: ${verificationCode}</p>
<p>Thank you for your order!</p>
<p>Please submit the form at the link: <a href="#tally-open=mJV6xY&tally-layout=modal&tally-width=700" style="color: lightblue;">Order</a></p>
<p>Before proceeding to checkout, be sure to save the verification code, take a screenshot and write down other information that may be needed when filling out the form.</p>
<button id="closeMessage" style="margin-top: 20px; padding: 10px 20px; font-size: 16px;">OK</button> 
</div>
    `;

    document.body.appendChild(messageContainer);

    document.getElementById('closeMessage').onclick = function() {
        document.body.removeChild(messageContainer);
    };

    cart = [];
    updateCart();
}

function writeReview() {
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
<h2>Hello!</h2>
<p>To leave a review, write it on the page:</p>
<p><a href="#tally-open=wo0yZ5&tally-layout=modal&tally-width=700" style="color: lightblue;">Leave a review</a></p>
<button id="closeMessage" style="margin-top: 20px; padding: 10px 20px; font-size: 16px;">OK</button>
</div>
    `;

    document.body.appendChild(messageContainer);

    document.getElementById('closeMessage').onclick = function() {
        document.body.removeChild(messageContainer);
    };
}

function revealSecret(message) {
    alert(message);
}

