function solve() {
   let products = document.getElementsByClassName('shopping-cart')[0];
   products.addEventListener('click', addProduct);
   let res = document.getElementsByTagName('textarea')[0];
   let cart = [];
   let totalPrice = 0;
   let isDone = false;

   function addProduct(event) {
      if (event.target.nodeName !== 'BUTTON') {
         return;
      }

      if (isDone) {
         return;
      }

      let btn = event.target;
      if (Array.from(btn.classList).indexOf('add-product') >= 0) {
         let product = event.target.parentElement.parentElement;
         let name = product.getElementsByClassName('product-title')[0].textContent;
         let price = Number(product.getElementsByClassName('product-line-price')[0].textContent);
         totalPrice += price;
         cart.push(name);

         res.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }

      if (Array.from(btn.classList).indexOf('checkout') >= 0) {
         res.textContent += `You bought ${cart.join(", ")} for ${totalPrice.toFixed(2)}.`;
         isDone = true;
      }
   }
}