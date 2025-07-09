document.addEventListener("DOMContentLoaded", () => {
  const categoryNames = {
    game: "Lost Flash Games",
    vhs: "Classic VHS",
    comics: "Forgotten Comics",
    arcade: "Arcade Exclusive",
    movies: "Deleted Movies",
    magazines: "Game Magazines"
  };

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  fetch("data/data.json")
    .then(res => res.json())
    .then(data => {
      const items = data.items.filter(item => item.category === category);
      const section = document.getElementById("category-items");
      const title = document.getElementById("category-title");

      title.textContent = categoryNames[category];

      items.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        const content = `
          <img src="${item.image}" alt="${item.title}">
          <div class="item-content">
            <h3>${item.icon} ${item.title}</h3>
            <p>${item.description}</p>
          </div>
        `;
        div.innerHTML = `<a href="${item.wiki}" target="_blank" rel="noopener noreferrer">${content}</a>`;
        section.appendChild(div);
      });
    });
});