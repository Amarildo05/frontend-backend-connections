// POST Method .then
const data = { name: "Post" };
let options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
};

fetch("https://jsonplaceholder.typicode.com/posts", options).then(
  (response) => {
    response.json().then((res) => {
      console.log("POST request: ", res);
    });
  }
);


//DELETE method .then
let deleteOptions = {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
};

fetch("https://jsonplaceholder.typicode.com/posts/2", deleteOptions).then(
  (response) => {
    response.json().then((res) => {
      console.log("Delete request: ", res);
    });
  }
);


//GET Method .then
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((result) => {
    result.json().then((res) => {
      console.log("Albums", res);
    });
  })
  .catch((error) => {
    console.log(error);
  });


//GET Method async func
async function getAlbums() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const result = await response.json();
  console.log("Result", result);
}

getAlbums();