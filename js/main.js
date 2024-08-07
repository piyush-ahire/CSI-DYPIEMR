(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });









    //Scroll for Get Started in Navbar

     document.addEventListener('DOMContentLoaded', function () {
        var getStartedLink = document.getElementById('get-started-link');

        if (getStartedLink) {
            getStartedLink.addEventListener('click', function (event) {
                event.preventDefault();

                // You can adjust the scrolling distance as needed
                var scrollDistance = 1000;

                // Calculate the target scroll position
                var targetScroll = window.scrollY + scrollDistance;

                // Use smooth scrolling
                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            });
        }
    });
 

    //Scroll for Read more
    
    document.addEventListener('DOMContentLoaded', function () {
        var readMoreLink = document.getElementById('read-more-link');

        if (readMoreLink) {
            readMoreLink.addEventListener('click', function (event) {
                event.preventDefault();

                // You can adjust the scrolling distance as needed
                var scrollDistance = 700;

                // Calculate the target scroll position
                var targetScroll = window.scrollY + scrollDistance;

                // Use smooth scrolling
                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            });
        }
    });
 


    //Faculty scrolling data
    
    
    document.addEventListener('DOMContentLoaded', function () {
        var countersExecuted = false;

        function updateCounters() {
            $('.counter').each(function () {
                var target = parseInt($(this).text());
                $(this).prop('Counter', 0).animate({
                    Counter: target
                }, {
                    duration: 2500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }

        var options = {
            rootMargin: '0px',
            threshold: 0.5
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !countersExecuted) {
                    updateCounters();
                    countersExecuted = true;
                }
            });
        }, options);

        var factsSection = document.querySelector('.fact');
        observer.observe(factsSection);
    });
 


    //scroll for up to down in techblog
    
    document.addEventListener('DOMContentLoaded', function () {
        var scrollToBottomLink = document.querySelector('.scroll-to-bottom');

        if (scrollToBottomLink) {
            scrollToBottomLink.addEventListener('click', function (event) {
                event.preventDefault();

                // Calculate the target scroll position (bottom of the page)
                var targetScroll = document.documentElement.scrollHeight - window.innerHeight;

                // Use smooth scrolling
                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            });
        }
    });
 

    //scroll upto target form
    
  document.addEventListener('DOMContentLoaded', function () {
    var scrollToBottomLink = document.querySelector('.scroll-to-bottom');

    if (scrollToBottomLink) {
      scrollToBottomLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Specify the target section by its ID
        var targetSection = document.getElementById('target-section');

        // Scroll to the top of the target section
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
  });
 


  //upload blogs
 
  document.addEventListener('DOMContentLoaded', function () {
    var scrollToUploadLink = document.getElementById('scroll-to-upload');

    if (scrollToUploadLink) {
      scrollToUploadLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Specify the target section by its ID
        var targetSection = document.getElementById('upload-section');

        // Scroll to the top of the target section
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
  });
 


  //scroll for rewards achievemnts
  
  document.addEventListener('DOMContentLoaded', function () {
    var scrollToRewardsLink = document.getElementById('scroll-to-rewards');

    if (scrollToRewardsLink) {
      scrollToRewardsLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Specify the target section by its ID
        var targetSection = document.getElementById('rewards-section');

        // Scroll to the top of the target section
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
  });
 


 










    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

