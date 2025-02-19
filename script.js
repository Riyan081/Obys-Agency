function loadingAnimation(){

  let tl = gsap.timeline();

  

  tl.from(".line h1", {
    y: 150,
    stagger: 0.3,
    duration: 0.6,
    delay: 0.5,
  });
  
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      let h5timer = document.querySelector("#line1-part1 h5");
      let grow = 0;
      setInterval(function () {
        if (grow < 100) {
          grow++;
          h5timer.innerHTML = grow;
        }
      }, 35);
    },
   
  });
  
  tl.to(".line h2",{
      animationName:"anime",
      opacity:1
  })
 
  tl.to("#loader", {
    opacity: 0,
    duration: 0.1,
    delay: 0.1,
    
  });
  
  tl.from("#page1",{
      delay:0.2,
      duration:1,
     
      opacity: 0,
      ease:Power4,
     
  })


  
  tl.to("#loder",{
      display:"none"
  })

  tl.from("#nav",{
   opacity:0,
  }) 
  
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:100,
    opacity:0,
    stagger:0.2
  })
}

loadingAnimation();


document.addEventListener("mousemove",function(dets){
  gsap.to("#crsr",{
    left:dets.x,
    top:dets.y
  })
  
})



