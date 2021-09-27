const pswrField = document.querySelector('input[type="password"]');
const toggleBtn = document.querySelector('.fa-eye');

toggleBtn.addEventListener('click', function () {
  pswrField.type = pswrField.type === 'password' ? 'text' : 'password';
  this.classList.toggle('active');
});
