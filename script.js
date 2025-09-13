document.addEventListener("mousemove",function(dets){
   gsap.to("#cursor",{
    left:dets.x,
    top:dets.y,
})
})



function lodingAnimation(){
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
    }, 1);
  },
});

t1.to(" .line h2",{
    animationName:"anime",
    opacity:1

})

t1.to("#loader", {
  opacity: 0,
  stagger: 0.3,
  delay: 0.1,
});

t1.from("#page1",{
    y:1200,
    opactigy:0,
    delaty:0.2,
   duration:0.6
})

t1.to("#loader",{
    display:"none"
}
)

t1.from("#nav",{
  opacity:0,
})

t1.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:140,
    stagger:0.2,
})
}

lodingAnimation();



Shery.makeMagnet("#nav-part2 p" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});





