//Create a function, that will obtain data under the given id by using fetchand display it in the console.
//If you wish, display data somewhere in your HTML.
//Then, call your function with different parameters, and check if you getdifferent data items.You can even create a
//few event listeners onyour page (for example a few different buttons).
//Each one will call the address with a different ID.

const input = document.getElementById("albumId");
const button = document.getElementById("button");
const container = document.getElementById("container");

function getAlbum() {
  console.log("value", isNaN(input.value));
  if (!input.value || isNaN(input.value)) {
    alert("Fill the input with number");
    return;
  }
  fetch(`https://jsonplaceholder.typicode.com/albums/${input.value}`).then(
    (response) => {
      response.json().then((result) => {
        console.log(result);
      });
    }
  );
}

button.addEventListener("click", getAlbum);

// const newButton = document.createElement("button");
// newButton.innerHTML = "New button";
// container.appendChild(newButton);
