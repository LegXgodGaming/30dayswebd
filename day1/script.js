const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



gsap.from(".img3",{
    // x: 200,
    duration:1.5,
    delay:0.2,
    scale:0.1,
      
});
gsap.from(".gsap1",{
    y: 100,
    duration:1.5,
    delay:0.2,
    
      
});
gsap.from(".btn2",{
    y: 100,
    duration:1.5,
    delay:0.2,
    
      
});
gsap.from(".navbar",{
    y: -100,
    duration:1.5,
    delay:0.2,
    
      
})
