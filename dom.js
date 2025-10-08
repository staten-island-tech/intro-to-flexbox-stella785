const DOMSelectors = {
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
};

function inject(album) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
      <img class="display-img" src="${album.url}"/>
      <h2 class="display-artist">${album.artist}</h2>
      <h3 class="display-album">${album.title}</h3>
      <button class="remove btn">Remove Album</button>
    </div>`
  );
}

function removeAlbum(event) {
  event.target.parentElement.remove();
}