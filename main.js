const sections = document.querySelectorAll("section");
const main_sidebar = document.querySelectorAll(".sidebar_main  ul li");
const expandable_sidebar = document.querySelectorAll(".sidebar_thin  ul li");
const header = document.getElementById("header_text");

window.addEventListener("scroll", () => {
  let current = "";
  // console.log("window", window.innerWidth)
  // console.log("window", window.outerWidth)

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight/10) {
      current = section.getAttribute("id");
    }  
  });

// console.log("header", header.innerHTML)
header.innerHTML = current

main_sidebar.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });


  expandable_sidebar.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});



