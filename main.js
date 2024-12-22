let cart = [];

// Добавление товара в корзину
function addToCart(image, name, price) {
    cart.push({ image, name, price });
    updateCartCount(); // Обновляем количество товаров в корзине
    calculateCartSum(); // Пересчитываем итоговую сумму
}

// Обновление счетчика товаров в корзине
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Открытие страницы корзины
function openCartPage() {
    const productList = document.getElementById('product-list');
    const cartPage = document.getElementById('cart-page');
    const cartItems = document.getElementById('cart-items');

    productList.style.display = 'none';
    cartPage.style.display = 'block';
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <span class="remove-item" onclick="removeFromCart(${index})">&times;</span>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Удаление товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount(); // Обновляем количество товаров в корзине
    openCartPage(); // Обновляем отображение корзины
    calculateCartSum(); // Пересчитываем итоговую сумму после удаления товара
}

// Переход на главную страницу
function openMainPage() {
    const productList = document.getElementById('product-list');
    const cartPage = document.getElementById('cart-page');

    productList.style.display = 'grid';
    cartPage.style.display = 'none';
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Закрытие бокового меню
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Функция для расчета суммы товаров в корзине
function calculateCartSum() {
    let sum = 0;

    // Суммируем значения цен из массива cart
    cart.forEach(item => {
        // Убираем текстовую часть цены и преобразуем в число
        const numericValue = parseFloat(item.price.replace(/[^\d.]/g, ''));
        sum += numericValue || 0; // Добавляем к общей сумме
    });

    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = `Итог: ${sum.toFixed(2)} сом`; // Выводим итог с округлением до 2 знаков
    }
}

// Функция для показа итогового блока
function showTotalBlock() {
    const totalBlock = document.getElementById('total-block');
    totalBlock.style.display = 'block'; // Показываем итоговый блок
    calculateCartSum(); // Пересчитываем итоговую сумму
}

// Закрытие итогового блока
function closeTotalBlock() {
    const totalBlock = document.getElementById('total-block');
    totalBlock.style.display = 'none'; // Скрываем итоговый блок
}
function showTotalBlock() {
    const totalAmount = parseFloat(document.getElementById('total').textContent.replace(' сом', ''));

    if (totalAmount === 0) {
        document.getElementById('pay-button').classList.add('disabled'); // Сделать кнопку серой
    } else {
        document.getElementById('pay-button').classList.remove('disabled'); // Включить кнопку
    }

    document.getElementById('total-block').style.display = 'block'; // Показываем блок
}

function closeTotalBlock() {
    document.getElementById('total-block').style.display = 'none'; // Скрываем блок
}
