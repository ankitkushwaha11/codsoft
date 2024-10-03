const bars=document.querySelector('.fa-solid')
const navbar=document.querySelector('.navbar')

bars.addEventListener('click',()=>{

  navbar.classList.toggle('active')
})

window.onscroll=()=>{

  navbar.classList.remove('active')
}



// contact-section-email.js


document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 


  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  
  emailjs.send("service_sqciiwk", "template_olbp62t", {
    from_name: fullName,
    from_email: email,
    subject: subject,
    message: message,
  }).then(function(response) {
    
    alert("Message sent successfully!");
    document.getElementById("contact-form").reset();
  }, function(error) {
    alert("Message not sent properly. Please try again.");
  });
});


// scroll-to-top-btn

const scrollTopBtn = document.getElementById('scrollTopBtn');


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      scrollTopBtn.classList.add('show'); 
    } else {
      scrollTopBtn.classList.remove('show'); 
    }
  });
});

const target = document.createElement('div');
document.body.insertBefore(target, document.body.firstChild);
observer.observe(target);


scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
