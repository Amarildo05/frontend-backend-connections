const list = document.getElementById("album-list");

function getAlbums() {
  fetch("https://jsonplaceholder.typicode.com/albums").then((response) => {
    response.json().then((result) => {
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        const album = document.createElement("li");
        album.innerText = result[i].title;
        list.appendChild(album);
      }
    });
  });
}

getAlbums();