document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const text = this.textContent;
    if (text.includes('ORDER NOW')) {
      alert('Order placed! 🚀');
    } else if (text === 'View Prices') {
      window.location.href = 'menu.html';
    } else if (text === "Today's Specials") {
      alert('Specials: Burger $9.99, Pasta $12.99');
    }
  });
});
