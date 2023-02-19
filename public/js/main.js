const navbar = document.querySelector("#navbarNav");

navbar.addEventListener("click", async (e) => {
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
  let link = await target.getAttribute("href");
  switch (link) {
    case "/signup":
      location.href = "/signup";
      break;
    case "/login":
      location.href = "/login";
      break;
    case "/":
      location.href = "/";
      break;
    case "/dashboard":
      location.href = "/dashboard";
      break;
  }
});
