const navbar = document.querySelector("#navbarNav");

navbar.addEventListener("click", (e) => {
  e.preventDefault();
  let target = e.target;
  if (target.matches("a")) {
    console.log(this);
  } else {
    console.log("did not click a link");
  }
});
