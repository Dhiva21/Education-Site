

$(document).ready(function () {  
    $('.testimonialCard').owlCarousel({
        loop: false,
        margin: 15,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    
     $('.banner_sec').owlCarousel({
      loop: false,
      autoplay: false,
      autoplayTimeout: 3000, 
      dots: true,
       nav: false,
      responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    //--- Event Card Carousel ----//
  

document.addEventListener('DOMContentLoaded', function () {
  const careerCardScroll = document.querySelector('.careerCardScroll');
  
  // Check if the element exists
  if (!careerCardScroll) {
    console.error("Element with class 'careerCardScroll' not found.");
    return;
  }

  let scrollInterval;

  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      careerCardScroll.scrollBy({
        top: 3,  // Adjusted scroll amount for smoothness
        behavior: 'smooth'
      });

      // Check if we've scrolled to the bottom
      if (careerCardScroll.scrollTop + careerCardScroll.clientHeight >= careerCardScroll.scrollHeight) {
        careerCardScroll.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 20); // Adjust interval time for smooth scrolling
  }

  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  startAutoScroll();

  // Add event listeners to pause on hover
  careerCardScroll.addEventListener('mouseenter', stopAutoScroll);
  careerCardScroll.addEventListener('mouseleave', startAutoScroll);
});




document.querySelector('.navbar-toggler').addEventListener('click', function() {
  this.classList.toggle('active');
});


document.querySelector('.contact').addEventListener('click', function(event) {
  event.preventDefault();
});












  
  
})
  
  
  
  
  
  
  
  

  //--- For page scroll to top ----//
  
  
  
  

