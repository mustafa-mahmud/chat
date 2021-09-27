const searchBar = document.querySelector('.users .search input');
const searchBtn = document.querySelector('.users .search button');

searchBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  searchBar.classList.toggle('show');
  searchBar.focus();
});
