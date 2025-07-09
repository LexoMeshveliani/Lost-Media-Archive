function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > window.innerHeight) {
    nav.classList.add('hide-nav');
  } else {
    nav.classList.remove('hide-nav');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('data/categories.json')
    .then(response => response.json())
    .then(data => {
      const catalog = document.getElementById('catalog');
      data.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';

        const title = document.createElement('div');
        title.textContent = `${item.icon} ${item.title}`;

        const desc = document.createElement('div');
        desc.className = 'item-desc';
        desc.textContent = item.description;

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(desc); 

        div.addEventListener('click', () => {
          window.location.href = `details.html?category=${item.id}`;
        });
        catalog.appendChild(div);
      });
    });
});