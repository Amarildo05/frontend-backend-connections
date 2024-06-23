const userId = document.getElementById("userId");
const title = document.getElementById("title");
const body = document.getElementById("body");
const button = document.getElementById("button");

function createNewPost() {
  const newPostData = {
    userId: userId.value,
    title: title.value,
    body: body.value,
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPostData),
  };

  if (!userId.value || !title.value || !body.value) {
    alert("Fill the inputs !");
    return;
  }
  fetch("https://jsonplaceholder.typicode.com/posts", options).then(
    (response) => {
      response.json().then((result) => {
        console.log("POST request:", result);
      });
    }
  );
}

button.addEventListener("click", createNewPost);