document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const checkoutButton = document.getElementById('checkout');

  function updateCart() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cartItems.innerHTML = '';
      let totalPrice = 0;

      cart.forEach((item, index) => {
          const row = document.createElement('tr');

          row.innerHTML = `
              <td><img src="${item.image}" alt="${item.name}" width="50"></td>
              <td>${item.name}</td>
              <td>${item.quantity} gm</td>
              <td>${item.cost} Rs</td>
              <td><button class="remove-button" data-index="${index}">Remove</button></td>
          `;

          cartItems.appendChild(row);
          totalPrice += item.cost;
      });

      totalPriceElement.textContent = `${totalPrice} Rs`;
      localStorage.setItem('totalPrice', totalPrice);
  }

  cartItems.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-button')) {
          const index = event.target.dataset.index;
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCart();
      }
  });

  checkoutButton.addEventListener('click', function (e) {
      e.preventDefault();
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (cart.length === 0) {
          totalPriceElement.textContent = 'Your cart is empty';
          return;
      }

      const totalAmount = parseFloat(totalPriceElement.textContent.replace(' Rs', ''));

      let options = {
          "key": "rzp_live_FDzNElGU22uTal", // Enter the Key ID generated from Razorpay Dashboard
          "amount": totalAmount * 100, // Amount is in currency subunits. For INR, it's paise, so multiply by 100.
          "currency": "INR",
          "name": "Dayneeds",
          "description": "Test Transaction",
          "image": "/logo.png",
          "handler": function (response) {
              // Handle the payment success
              handlePaymentSuccess(response, cart, totalAmount);
          },
          "prefill": {
              "name": "Customer Name",
              "email": "customer.email@example.com",
              "contact": "9999999999"
          },
          "theme": {
              "color": "#3399cc"
          }
      };
      const rzp1 = new Razorpay(options);
      rzp1.open();
  });

  async function handlePaymentSuccess(response, cart, totalAmount) {
      const userId = JSON.parse(sessionStorage.getItem("user-creds")).uid;
      const dbRef = ref(getDatabase(), `Orders/${userId}`);

      try {
          const newOrderRef = push(dbRef);
          await set(newOrderRef, {
              orderId: response.razorpay_payment_id,
              items: cart,
              totalAmount: totalAmount,
              paymentStatus: "Completed",
              orderDate: new Date().toISOString(),
          });

          // Clear the cart
          localStorage.removeItem('cart');
          alert("Order placed successfully!");
          window.location.href = "/mainApplication/RALpages/orderConfirmation.html";
      } catch (error) {
          console.error("Error saving order to Firebase: ", error);
      }
  }

  updateCart();
});
