const form = document.querySelector('form');
const continueBtn = form.querySelector('.button input');

async function sendData(e) {
  e.preventDefault();
  const newForm = new FormData(form);

  const res = await fetch('signup.php', {
    method: 'post',
    body: JSON.stringify(newForm),
  });

  const text = res.text();

  console.log(text);
}

//////////////////////
form.addEventListener('submit', sendData);
