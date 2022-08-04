const row = document.querySelector(".row");
const navMenu = document.querySelector(".ulContainer .ul ");

row.addEventListener("click",()=>{
    row.classList.toggle("active");
    navMenu.classList.toggle("active");
  
})




