// const header=document.querySelector(".header");
// const hero=document.querySelector(".middle");
// const observer= new IntersectionObserver((entries)=>{ 
//     const ent=entries[0];
//     ent.isIntersecting===false ? header.classList.add("sticky"):header.classList.remove("sticky");
// },{

//     root:null,
//     rootMargin : "-80px",
//     threshold : 0,
// })
// observer.observe(hero); 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
}