gsap.from(".wrap",2,{
    opacity:0,
    delay:0.3,
    scale:2.2,
    stagger:{
        amount:4,
    },
    ease:"elastic.out(.5,1)",
    ScrollTrigger:{
        trigger:".container",
        start:"top top",
        end:"+=100%",
        
    },
});