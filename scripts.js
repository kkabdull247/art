// // Add to cart functionality
// document.addEventListener('DOMContentLoaded', function () {
//     var addToCartButtons = document.querySelectorAll('.add-to-cart');
//     var cartCount = document.querySelector('.cart-count');

//     addToCartButtons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             var productName = button.dataset.name;
//             var productPrice = parseFloat(button.dataset.price);

//             // Update cart count (example, implement your own cart logic)
//             var currentCount = parseInt(cartCount.textContent);
//             cartCount.textContent = currentCount + 1;

//             // Optional: Implement your cart logic here (e.g., store items in an array, localStorage, etc.)
//         });
//     });
// });



// const toggleButton = document.querySelector('.toggle-button');
// const navbarLinks = document.querySelector('.navbar-links');

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
// });
