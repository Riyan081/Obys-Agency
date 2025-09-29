// GSAP ScrollSmoother setup
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
});

document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  });
});

function lodingAnimation() {
  var t1 = gsap.timeline();

  t1.from(".line h1", {
    y: 150,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.3,
    ease: "power2.out",
  });

  t1.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      const h5timer = document.querySelector("#line1-part1 h5");
      let grow = 0;

      setInterval(() => {
        if (grow < 100) {
          grow++;
          h5timer.innerHTML = grow;
        }
      }, 30);
    },
  });

  t1.to(" .line h2", {
    animationName: "animes",
    opacity: 1,
  });

  t1.to("#loader", {
    opacity: 0,
    stagger: 0.3,
    delay: 2.5,
    duration: 1,
  });

  t1.from("#page1", {
    y: 1200,
    opactiy: 0,
    delay: 0.2,
    duration: 0.6,
  });

  t1.to("#loader", {
    display: "none",
  });

  t1.from("#nav", {
    opacity: 0,
  });

  t1.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 140,
    stagger: 0.2,
  });
}

lodingAnimation();

Shery.makeMagnet("#nav-part2 p" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});



function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 6,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: 997, range: [-9999999, 9999999] },
      aspect: { value: 0.9696917626772503 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.34, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}

sheryAnimation();

var c = document.querySelector("#video-container");

c.addEventListener("mouseenter", function (dets) {
  gsap.to("#cursor", {
    opacity: 0,
  });
  
  // Clear any existing mousemove listeners first
  c.onmousemove = null;
  
  c.addEventListener("mousemove", function (dets) {
    gsap.to("#play", {
      left: dets.x - 500,
      y: dets.y - 100,
    });
  });
});
c.addEventListener("mouseleave", function (dets) {
  gsap.to("#cursor", {
    opacity: 1,
  });
  gsap.to("#play", {
    top: "-10%",
    right: "20%",
  });
});

var video = document.querySelector("#video-container video");
var img = document.querySelector("#video-container img");

c.addEventListener("click", function() {
  video.style.opacity = 1;
  video.play();
  img.style.opacity = 0; // Hide the image poster
});



document.addEventListener("mousemove", function (dets) {
  gsap.to("#flag",{
    x:dets.x,
    y:dets.y
  })
});



document.querySelector("#hero3").addEventListener("mouseenter",function(dets){
     gsap.to("#flag",{
    opacity:1,
   
  })
});

document.querySelector("#hero3").addEventListener("mouseleave",function(dets){
     gsap.to("#flag",{
    opacity:0,
     }
    )
});

var h = document.querySelector("#footer h1");

h.addEventListener("mouseenter", function() {

  gsap.to(h, {
  
   
    onStart: function() {
      $('h1').textillate({ in: { effect: 'fadeIn' } });
    }
  });
    h.style.color = "transparent";
  h.style.webkitTextStroke = "1px white";
});

