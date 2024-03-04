
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
let sections  = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onclick = () => {
  Selection.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let heighgt = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' +id+']').classList.add('active');
      });
    }
  });
  let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove ('active');
};
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});

const typed = new Typed('.multiple-text',{
  strings: ['Full-Stack Developer','Content Creator', 'Blogger','Graphic Designer','Video Editor'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

function validateForm() {
  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var mobileNumber = document.getElementById('mobileNumber').value;
  var emailSubject = document.getElementById('emailSubject').value;
  var message = document.getElementById('message').value;

  if (fullName === '' || email === '' || mobileNumber === '' || emailSubject === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  submitForm();
}
function submitForm() {
  alert('Form submitted successfully!');
  document.getElementById('contactForm').reset(); 
}