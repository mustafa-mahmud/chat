const form = document.querySelector('form');
const continueBtn = form.querySelector('.button input');
const errorText = document.querySelector('.error-text');

async function sendData(e) {
  e.preventDefault();

  const newForm = new FormData(form);

  const res = await fetch('php/signup.php', {
    method: 'post',
    body: newForm,
  });

  const text = await res.text();
  if (text === 'success') {
    location.href = 'users.php';
  } else {
    errorText.style.display = 'block';
    errorText.textContent = text;
  }
  console.log(text);
}

//////////////////////
form.addEventListener('submit', sendData);
