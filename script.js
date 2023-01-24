const splashscreen = document.getElementById('splash');
const form = document.getElementById('formContact');

function slideLeft() {
  document.getElementById('projectsSet').scrollBy(-0.162 * window.innerWidth, 0);
  if (document.getElementById('projectsSet').scrollLeft / window.innerWidth < 0.1) {
    document.getElementById('projectsSet').scrollBy(-1000, 0)
  }
}

function slideRight() {
  document.getElementById('projectsSet').scrollBy(0.163 * window.innerWidth, 0)
  if (document.getElementById('projectsSet').scrollLeft / window.innerWidth > 0.6) {
    document.getElementById('projectsSet').scrollBy(1000, 0)
  }
}


window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => splashscreen.classList.add('active'), 1500)

})

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let send = {
    from_name: document.querySelector('#name').value,
    from_email: document.querySelector('#email').value,
    message: document.querySelector('#message').value
  }
  emailjs.send('service_p5cw83c', 'template_k5tppxg', send);
})


const navButton = document.querySelector('nav button');
const navList = document.querySelector('nav ul');

navButton.addEventListener('click', function () {
  navList.classList.toggle('active')
})


const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navList.classList.remove('active')
  })
});


const resume = document.querySelector('#resume');
const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');


window.addEventListener('scroll', function () {
  if (window.scrollY <= 300) {
    navLinks.forEach(navLink => {

      navLink.classList.remove('active')
    });
    navLinks[0].classList.add('active')
  } else if (window.scrollY < skills.offsetTop + 300) {
    navLinks.forEach(navLink => {
      navLink.classList.remove('active')
    });
    navLinks[1].classList.add('active')
  } else if (window.scrollY < projects.offsetTop + 300) {
    navLinks.forEach(navLink => {
      navLink.classList.remove('active')
    });
    navLinks[2].classList.add('active')
  } else if (window.scrollY < contact.offsetTop + 300) {
    navLinks.forEach(navLink => {
      navLink.classList.remove('active')
    });
    navLinks[3].classList.add('active')
  }
})
