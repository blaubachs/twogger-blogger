const navbar = document.querySelector("#navbarNav");

navbar.addEventListener("click", (e) => {
  e.preventDefault();
  let target = e.target;
  let navLinks = document.querySelector("#navLinks");
  for (let i = 0; i < navLinks.children.length; i++) {
    let linkNode = navLinks.children[i].children[0];
    linkNode.setAttribute("class", "nav-link");
  }
  if (target.matches("a")) {
    console.log(target);
    target.setAttribute("class", "nav-link disabled");
  }
});
