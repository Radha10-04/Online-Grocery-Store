let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
	searchForm.classList.toggle('active');
	
}




let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
	loginForm.classList.toggle('active');
	
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
	navbar.classList.toggle('active');
	loginForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	searchForm.classList.remove('active');
}

window.onscroll = () =>
{
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
	loop:true,
	spacebetween: 20,

	autoplay: {
		delay: 7500,
		disableOnInteraction: false,

	},
	breakpoints: {
		0:
		{
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1020: {
			slidesPerView: 3,
		},
	},
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');
    let totalPrice = 0;

    // Add to cart button functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(name, price);
        });
    });

    function addToCart(name, price) {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `${name} - $${price.toFixed(2)} <button class="remove">Remove</button>`;
        
        // Remove item functionality
        li.querySelector('.remove').addEventListener('click', () => {
            removeFromCart(li, price);
        });

        cartItemsList.appendChild(li);
        totalPrice += price;
        updateTotalPrice();
    }

    function removeFromCart(item, price) {
        cartItemsList.removeChild(item);
        totalPrice -= price;
        updateTotalPrice();
    }

    function updateTotalPrice() {
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    // Checkout button functionality
    checkoutButton.addEventListener('click', () => {
        if (totalPrice > 0) {
            alert(`Checkout complete! Total: $${totalPrice.toFixed(2)}`);
            cartItemsList.innerHTML = '';
            totalPrice = 0;
            updateTotalPrice();
        } else {
            alert('Your cart is empty!');
        }
    });
});

var swiper = new Swiper(".review-slider", {
	loop:true,
	spacebetween: 20,

	autoplay: {
		delay: 7500,
		disableOnInteraction: false,

	},
	breakpoints: {
		0:
		{
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1020: {
			slidesPerView: 3,
		},
	},
});
