
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('pho').value.trim();
  const query = document.getElementById('query').value;
  const message = document.getElementById('message').value.trim();
  
  if (!name || !email || !phone || !message || query === 'sel') {
    showAlert('Please fill all fields and select a query type', 'error');
    return;
  }
  const submitBtn = document.querySelector('input[type="submit"]');
  submitBtn.value = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    showAlert('Thank you! We\'ll get back to you within 24 hours.', 'success');
    form.reset();
    submitBtn.value = 'Submit';
    submitBtn.disabled = false;
  }, 2000);
});


document.getElementById('query').addEventListener('change', function() {
  const helpDiv = document.getElementById('query-help');
  const helps = {
    'ord': 'Delivery delays, wrong items, refunds',
    'site': 'Login issues, payment errors',
    'fed': 'Service quality complaints',
    'others': 'General questions'
  };
});


document.querySelector('input[type="reset"]').addEventListener('click', function(e) {
  if (!confirm('Clear all form data?')) {
    e.preventDefault();
  }
});


function showAlert(message, type) {
  const existing = document.querySelector('.alert');
  if (existing) existing.remove();
  
  const alert = document.createElement('div');
  alert.className = `alert ${type}`;
  alert.textContent = message;
  document.getElementById('ContactUs').insertBefore(alert, form);
  
  setTimeout(() => alert.remove(), 4000);
}
