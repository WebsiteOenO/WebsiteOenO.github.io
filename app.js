function scrollWin() {
    window.scroll({
        top: 600, 
        left: 0, 
        behavior: 'smooth'
    });
}

function menubar() {
  const navbar = document.querySelector(".navbar");
  const menu = document.querySelector(".menu-list")
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
  };
  cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
  };
}

menubar();
