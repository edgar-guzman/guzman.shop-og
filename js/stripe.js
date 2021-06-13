// (function() {
//     var stripe = Stripe('pk_test_vW0RMLpZvhrNHHVV39hCNqRL');

//     var checkoutButton = document.getElementById('checkout-button-price_1HcFkzGUhPzfGLK3jdUaAEOs');
//     checkoutButton.addEventListener('click', function () {
//       stripe.redirectToCheckout({
//         lineItems: [{price: 'price_1HcFkzGUhPzfGLK3jdUaAEOs', quantity: 1}],
//         mode: 'payment',sUrl: 'https://www.guzman.shop/success',
//         cancelUrl: 'https://www.guzman.shop/canceled',
//       })
//       .then(function (result) {
//         if (result.error) {
//           var displayError = document.getElementById('error-message');
//           displayError.textContent = result.error.message;
//         }
//       });
//     });
//   })();

  
// (function() {
//   var stripe = Stripe('pk_test_vW0RMLpZvhrNHHVV39hCNqRL');

//   var checkoutButton = document.getElementById('checkout-button-price_1HcFkzGUhPzfGLK3jdUaAEOs');
//   checkoutButton.addEventListener('click', function () {
//     stripe.redirectToCheckout({
//       lineItems: [{price: 'price_1HcFkzGUhPzfGLK3jdUaAEOs', quantity: 1}],
//       mode: 'payment',
//       successUrl: 'https://www.guzman.shop/success',
//       cancelUrl: 'https://www.guzman.shop/canceled',
//     })
//     .then(function (result) {
//       if (result.error) {
//         var displayError = document.getElementById('error-message');
//         displayError.textContent = result.error.message;
//       }
//     });
//   });
// })();

// NEW STRIPE CARD JS

(function() {
  var stripe = Stripe('pk_test_vW0RMLpZvhrNHHVV39hCNqRL');

  var checkoutButton = document.getElementById('checkout-button-price_1HcFkzGUhPzfGLK3jdUaAEOs');
  checkoutButton.addEventListener('click', function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1HcFkzGUhPzfGLK3jdUaAEOs', quantity: 1}],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
      successUrl: 'https://www.guzman.shop/success',
      cancelUrl: 'https://www.guzman.shop/canceled',
    })
    .then(function (result) {
      if (result.error) {
        /*
         * If `redirectToCheckout` fails due to a browser or network
         * error, display the localized error message to your customer.
         */
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();