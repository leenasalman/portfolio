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

$(document).ready(function () {
  // nav current item class
  $(".first-cube-nav .item-list").on("click", function (e) {
    e.preventDefault();
    $(".first-cube-nav .item-list").removeClass("current-item");
    $(this).addClass("current-item");

    if (!(e.target.innerHTML.toLowerCase() == "home")) {
      $("svg").addClass("d-none");
    }
  });

  $(".second-cube-nav .item-list").on("click", function (e) {
    e.preventDefault();
    $(".second-cube-nav .item-list").removeClass("current-item");
    $(this).addClass("current-item");
  });

  $(".third-cube-nav .item-list").on("click", function (e) {
    e.preventDefault();
    $(".third-cube-nav .item-list").removeClass("current-item");
    $(this).addClass("current-item");
  });
  window.setTimeout(function () {
    $("polygon").addClass("polygon-style");
  }, 1000);
  // cube one rotate
  const el = document.querySelector(".cubeRotate");

  $("#homeFunction").on("click", function (event) {
    event.preventDefault();
    el.style.transform = `translateZ(-150px) rotateX(0deg)`;
    // remove skills styles
    $(".bar.fill").addClass("animate");
    $(".bar.flex > span").removeClass("animate");

    // remove octagon styles
    $("#octagon").removeClass("rotate-octagon");
    $(".projects-header-container > h1").removeClass("pop-up");
    $(".projects-paragraph-container > p").removeClass("blink");
  });
  $("#descrFunction").on("click", function (event) {
    event.preventDefault();
    el.style.transform = `translateZ(-150px) rotateX(90deg)`;

    // remove skills styles
    $(".bar.fill").addClass("animate");
    $(".bar.flex > span").removeClass("animate");

    // remove octagon styles
    $("#octagon").removeClass("rotate-octagon");
    $(".projects-header-container > h1").removeClass("pop-up");
    $(".projects-paragraph-container > p").removeClass("blink");
  });
  $("#skillsFunction").on("click", function (event) {
    event.preventDefault();
    el.style.transform = `translateZ(-150px) rotateX(180deg)`;

    // skills styles
    $(".bar.fill").removeClass("animate");
    $(".bar.flex > span").addClass("animate");

    var element = $(".bar.fill");
    window.setTimeout(function () {
      for (var i = 0; i < element.length; i++) {
        var elementWidthInPercent = parseInt(element[i].style.width) - 10 + "%"; // in percent
        element[i].style.width = elementWidthInPercent;
      }
    }, 800);
    window.setTimeout(function () {
      for (var i = 0; i < element.length; i++) {
        var elementWidthInPercent = parseInt(element[i].style.width) + 10 + "%"; // in percent
        element[i].style.width = elementWidthInPercent;
      }
    }, 1000);

    var counters = document.querySelectorAll('.percent');
    var speed = 200;
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if(count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 20); 
        } else {
          count.innerText = target;
        }
      };
      updateCount();
    });

    // remove octagon styles
    $("#octagon").removeClass("rotate-octagon");
    $(".projects-header-container > h1").removeClass("pop-up");
    $(".projects-paragraph-container > p").removeClass("blink");
  });
  $("#workFunction").on("click", function (event) {
    event.preventDefault();
    el.style.transform = `translateZ(-150px) rotateX(270deg)`;

    // remove skills styles
    $(".bar.fill").addClass("animate");
    $(".bar.flex > span").removeClass("animate");

    // octagon styles
    $("#octagon").addClass("rotate-octagon");
    $(".projects-header-container > h1").addClass("pop-up");
    $(".projects-paragraph-container > p").addClass("blink");

    // remove display none on cube two
    $("#cubeTwo").removeClass("display-none");
  });

  const elCubeTwo = document.querySelector(".cube-projects-one-rotate");

  $("#raptorX").on("click", function (event) {
    event.preventDefault();
    elCubeTwo.style.transform = `translateZ(-150px) rotateX(0deg)`;
    $(".second-cube-nav .item-list > a").removeClass("white-color-nav-items");
  });
  $("#iorAfrica").on("click", function (event) {
    event.preventDefault();
    elCubeTwo.style.transform = `translateZ(-150px) rotateX(90deg)`;
    $(".second-cube-nav .item-list > a").addClass("white-color-nav-items");
  });
  $("#royalOnlineBook").on("click", function (event) {
    event.preventDefault();
    elCubeTwo.style.transform = `translateZ(-150px) rotateX(180deg)`;
    $(".second-cube-nav .item-list > a").addClass("white-color-nav-items");
  });
  $("#wolfTripleSeven").on("click", function (event) {
    event.preventDefault();
    elCubeTwo.style.transform = `translateZ(-150px) rotateX(270deg)`;

    $(".second-cube-nav .item-list > a").addClass("white-color-nav-items");
    // remove display none on cube three
    $("#cubeThree").removeClass("display-none");
  });

  // cube two rotate

  const elCubeThird = document.querySelector(".cube-projects-two-rotate");

  $("#scienceUni").on("click", function (event) {
    event.preventDefault();
    elCubeThird.style.transform = `translateZ(-150px) rotateX(0deg)`;
    $(".third-cube-nav .item-list > a").removeClass("white-color-nav-items");
  });
  $("#jokeAPI").on("click", function (event) {
    event.preventDefault();
    elCubeThird.style.transform = `translateZ(-150px) rotateX(90deg)`;
    // remove display none on footer
    $("#footerSection").removeClass("display-none");

    $(".third-cube-nav .item-list > a").addClass("white-color-nav-items");
  });
  $("#underConstruction").on("click", function (event) {
    event.preventDefault();
    elCubeThird.style.transform = `translateZ(-150px) rotateX(180deg)`;
  });
  $("#underConstruction2").on("click", function (event) {
    event.preventDefault();
    elCubeThird.style.transform = `translateZ(-150px) rotateX(270deg)`;
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
