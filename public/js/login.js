const loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const newUserObj = {
    username: document.querySelector("#loginUsername").value,
    password: document.querySelector("#loginPassword").value,
  };

  const loginUser = await fetch("/api/users/signin", {
    method: "POST",
    body: JSON.stringify(newUserObj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (loginUser.ok) {
    location.href = "/dashboard";
  } else {
    console.log("something went wrong");
  }
});
