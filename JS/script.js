const swiper = new Swiper(".swiper-container", {
  // Navigation arrows
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ParticlesJS Config.
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#827e80",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

function gotoTop() {
  $("html, body").animate(
    {
      scrollTop: $("#header-section-top").offset().top,
    },
    1000
  );
}
function aboutMe() {
  $("html, body").animate(
    {
      scrollTop: $("#about-me-section").offset().top,
    },
    1000
  );
}
function gotoProjects() {
  $("html, body").animate(
    {
      scrollTop: $("#projectsSection").offset().top,
    },
    1000
  );
}
function goToContact() {
  $("html, body").animate(
    {
      scrollTop: $("#footerSection").offset().top,
    },
    1000
  );
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 115) {
      $(".div-nav").addClass("nav-scroll");
    }
    if ($(window).scrollTop() < 115) {
      $(".div-nav").removeClass("nav-scroll");
    }
    if ($(window).scrollTop() > $("#about-me-section").offset().top) {
      $(".bar.fill").removeClass("animate");
      $(".bar.flex > span").addClass("animate");
    }
  });
  $(window).resize(function () {
    $(".side-nav-bar").removeClass("clicked");
    $('.icon-button > i').removeClass('rotated');

  });
  $("#sideNavButton").click(function (event) {
    event.preventDefault();
    if ($(".side-nav-bar").hasClass("clicked")) {
      $(".side-nav-bar").removeClass("clicked");
      $('.icon-button > i').removeClass('rotated');
    } else {
      $(".side-nav-bar").addClass("clicked");
      $('.icon-button > i').addClass('rotated');
    }
  });
  // about me text
  var textWrapper = document.querySelector(".ml2");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml2 .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: ".ml2",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
  // about me text

  // typewritter
  console.clear();
  function typingEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";
    var i = 0;
    var timer = setInterval(function () {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  const h1 = document.querySelector("h1");
  typingEffect(h1, 150);
  // typewritter end
});
