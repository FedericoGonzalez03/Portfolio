const splashscreen = document.getElementById('splash');


function slideLeft(){
  document.getElementById('projectsSet').scrollBy(-0.162 * window.innerWidth,0);
  if(document.getElementById('projectsSet').scrollLeft/window.innerWidth < 0.1){
    document.getElementById('projectsSet').scrollBy(-1000,0)
  }
}

function slideRight(){
  document.getElementById('projectsSet').scrollBy(0.163 * window.innerWidth,0)
  if(document.getElementById('projectsSet').scrollLeft/window.innerWidth >0.6){
    document.getElementById('projectsSet').scrollBy(1000,0)
  }
}


window.addEventListener("DOMContentLoaded", ()=>{
  setTimeout(()=>splashscreen.classList.add('active'),1500)
  
})