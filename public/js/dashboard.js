const postBtn = document.querySelector("#newPost");

// creates a new post on click, server handles creation and assigning the post to the user
postBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const newPostObj = {
    title: document.querySelector("#postTitle").value,
    post_text: document.querySelector("#postText").value,
  };

  const createNewPost = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(newPostObj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (createNewPost.ok) {
    console.log(createNewPost);
  } else {
    console.log("woopsie!");
  }
});
