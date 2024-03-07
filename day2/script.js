const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


gsap.from(".text1",{
    y: 100,
    duration:1.5,
    delay:0.2,
    
      
});
gsap.from(".video",{
    y: 100,
    duration:1.5,
    delay:0.2,
    
      
});
gsap.from(".page1nav",{
    y: -100,
    duration:1.5,
    delay:0.2,
    
      
});


