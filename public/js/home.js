const postDiv = document.querySelector("#postDiv");

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
