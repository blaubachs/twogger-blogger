const postBtn = document.querySelector("#newPost");
const postDiv = document.querySelector("#postDiv");

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
    document.querySelector("#postTitle").value = "";
    document.querySelector("#postText").value = "";
    location.reload();
  } else {
    console.log("woopsie!");
  }
});
// TODO: Create a comment. Get the ID from a parent dom element.
postDiv.addEventListener("click", async (e) => {
  e.preventDefault();
  if (e.target.matches("#commentSubmit")) {
    let commentBtn = e.target;
    let commentText = e.target.parentNode.children[1].value;
    let postID = commentBtn.parentNode.parentNode.getAttribute("id");
    let newCommentObj = {
      comment_text: commentText,
      PostId: postID,
    };

    const postComment = await fetch(`/api/comments/${postID}`, {
      method: "POST",
      body: JSON.stringify(newCommentObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (postComment.ok) {
      e.target.parentNode.children[1].value = "";
      location.reload();
    } else {
      console.log("something happened");
    }
  }
});
// TODO: need fetch req to delete a post
