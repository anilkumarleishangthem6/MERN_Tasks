const services = [
    { id: 1, icon: '👔', name: 'Dry Cleaning', price: 200.00, inCart: false },
    { id: 2, icon: '🧺', name: 'Wash & Fold', price: 100.00, inCart: false },
    { id: 3, icon: '🧷', name: 'Ironing', price: 30.00, inCart: false },
    { id: 4, icon: '🩸', name: 'Stain Removal', price: 500.00, inCart: false },
    { id: 5, icon: '🧥', name: 'Leather & Suede Cleaning', price: 999.00, inCart: false },
    { id: 6, icon: '👗', name: 'Wedding Dress Cleaning', price: 2800.00, inCart: false }
];

const formatPrice = (price) => `₹${price.toFixed(2)}`;

function toggleCart(id) {
    const service = services.find(s => s.id === id);
    if (service) {
        service.inCart = !service.inCart;
        render();
    }
}

function render() {
    renderServices();
    renderCart();
}

function renderServices() {
    const container = document.getElementById('services-list');
    container.innerHTML = '';

    services.forEach(service => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'service-item';
        
        const buttonHTML = service.inCart 
            ? `<button class="btn btn-remove" onclick="toggleCart(${service.id})">Remove Item <span>⊖</span></button>`
            : `<button class="btn btn-add" onclick="toggleCart(${service.id})">Add Item <span>⊕</span></button>`;

        itemDiv.innerHTML = `
            <div class="service-info">
                <span>${service.icon}</span> 
                ${service.name} 
                <span class="service-price">• ${formatPrice(service.price)}</span>
            </div>
            ${buttonHTML}
        `;
        container.appendChild(itemDiv);
    });
}

function renderCart() {
    const cartList = document.getElementById('cart-list');
    const totalAmountEl = document.getElementById('total-amount');
    const btnBook = document.getElementById('btn-book');
    const formError = document.getElementById('form-error');
    
    cartList.innerHTML = '';
    let total = 0;
    let serialNumber = 1;
    let hasItems = false;

    services.forEach(service => {
        if (service.inCart) {
            hasItems = true;
            total += service.price;
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${serialNumber}</td>
                <td class="item-name">${service.name}</td>
                <td class="align-right">${formatPrice(service.price)}</td>
            `;
            cartList.appendChild(tr);
            serialNumber++;
        }
    });

    if (hasItems) {
        btnBook.disabled = false;
        formError.style.display = 'none';
        totalAmountEl.textContent = formatPrice(total);
    } else {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td colspan="3">
                <div class="empty-state">
                    <div class="empty-icon">ⓘ</div>
                    <div class="empty-title">No Items Added</div>
                    <div class="empty-subtitle">Add items to the cart from the services bar</div>
                </div>
            </td>
        `;
        cartList.appendChild(tr);

        btnBook.disabled = true;
        formError.style.display = 'flex';
        totalAmountEl.textContent = '₹ 0';
    }
}

render();

document.getElementById('btn-book').addEventListener('click', function() {
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    const btnBook = document.getElementById('btn-book');

    successMsg.style.display = 'flex';
    errorMsg.style.display = 'none';

    btnBook.textContent = 'Booked Successfully!';
    btnBook.disabled = true;

    setTimeout(() => {
        successMsg.style.display = 'none';
        
        btnBook.textContent = 'Book now';
        
        services.forEach(service => service.inCart = false);
        
        render();
    }, 4000); 
});