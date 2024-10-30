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

const validEmail = (email) => email.toLowerCase().match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let send = {
    from_name: document.querySelector('#name').value,
    from_email: document.querySelector('#email').value,
    message: document.querySelector('#message').value
  }

  if (send.from_email == '' || send.from_name == '' || send.message == '' || !validEmail(send.from_email)) {
    alert('Por favor, complete todos los campos correctamente');
    return;
  }

  emailjs.send('service_p5cw83c', 'template_k5tppxg', send).then((r) => {
    if(r.status == 200) {
      confirm('Mail enviado correctamente');
    } else {
      alert('Ha ocurrido un error enviando el mail');
    }
  });
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
const about = document.querySelector('#about');
const certifications = document.querySelector('#certifications');
const knowledge = document.querySelector('#knowledge');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');


window.addEventListener('scroll', function () {
  if (window.scrollY < resume.offsetTop + resume.scrollHeight) {
    navLinks.forEach(navLink => {

      navLink.classList.remove('active')
    });
    navLinks[0].classList.add('active')
  } else if (window.scrollY < about.offsetTop + about.scrollHeight) {
    navLinks.forEach(navLink => {
      navLink.classList.remove('active')
    });
    navLinks[1].classList.add('active')
  } else if ( window.scrollY < certifications.offsetTop + certifications.scrollHeight) {
    navLinks.forEach(navLink => {
      navLink.classList.remove('active')
    });
    navLinks[2].classList.add('active')
  } else if ( window.scrollY < knowledge.offsetTop + knowledge.scrollHeight) {
    navLinks.forEach(navLink => {
      navLink.classList.remove('active')
    });
    navLinks[3].classList.add('active')
  } else if (window.scrollY < projects.offsetTop + projects.scrollHeight) {
    navLinks.forEach(navLink => {
      navLink.classList.remove('active')
    });
    navLinks[4].classList.add('active')
  } else if (window.scrollY < contact.offsetTop + contact.scrollHeight) {
    navLinks.forEach(navLink => {
      navLink.classList.remove('active')
    });
    navLinks[5].classList.add('active')
  }
})
