fetch("menu.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("menu-placeholder").innerHTML = html;
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {       
        link.classList.add(
          "bg-lime-400",
          "text-black",
          "font-semibold"
        );
      }
    });
  });
