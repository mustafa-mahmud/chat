const searchBar = document.querySelector('.users .search input');
const searchBtn = document.querySelector('.users .search button');
const usersList = document.querySelector('.users-list');

searchBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  searchBar.classList.toggle('show');
  searchBar.focus();
});

setInterval(async () => {
  const res = await fetch('php/users.php');
  const text = await res.text();
  console.log(text);
  usersList.innerHTML = text;
}, 500);
