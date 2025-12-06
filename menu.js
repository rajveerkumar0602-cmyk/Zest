
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function() {
    const name = this.querySelector('.item-name').textContent;
    const price = this.querySelector('.item-price').textContent;
    

    this.classList.add('added-to-cart');
    showNotification(`${name} added to cart! ${price}`);
    
    setTimeout(() => this.classList.remove('added-to-cart'), 1200);
    
    updateCartCounter();
  });
});


document.querySelectorAll('.menu-category').forEach(category => {
  category.style.cursor = 'pointer';
  category.addEventListener('click', function() {
    const categoryName = this.textContent;
    filterByCategory(categoryName);
  });
});



function showAllButton() {
  let btn = document.querySelector('.show-all-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.className = 'show-all-btn';
    btn.textContent = 'Show All Items';
    header.appendChild(btn);
    btn.addEventListener('click', showAllItems);
  }
}

function showAllItems() {
  document.querySelectorAll('.menu-item').forEach(item => {
    item.style.display = 'flex';
  });
  document.querySelector('.show-all-btn')?.remove();
}


function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 50);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 400);
  }, 3000);
}


updateCartCounter();
