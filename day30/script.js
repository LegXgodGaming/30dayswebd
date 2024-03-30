function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()


var Typing = new Typed(".multitext",{
    strings : ["Animater","Youtuber","Designer"],
    loop :true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500,
})



gsap.from(".leftmid",{
    y: 100,
    duration:1.5,
    delay:0.2,
    
      
});
gsap.from(".rightmid",{
    y: 100,
    duration:1.5,
    delay:0.2,
    
      
});

gsap.from(".left2", {
    scrollTrigger: {
        trigger: ".left2",
        scroller: ".main",
        // markers: true,
        start: "top 60%",
        end: "top 10%",
        // scrub: 3,
    },
    x: -200,
    duration: 1.5
});
gsap.from(".right2", {
    scrollTrigger: {
        trigger: ".right2",
        scroller: ".main",
        // markers: true,
        start: "top 82%",
        end: "top 10%",
        // scrub: 3,
    },
    x: 200,
    duration: 1.5
});
gsap.from(".right4", {
    scrollTrigger: {
        trigger: ".right4",
        scroller: ".main",
        // markers: true,
        start: "top 82%",
        end: "top 10%",
        // scrub: 3,
    },
    x: 200,
    duration: 1.5
});
gsap.from(".left4", {
    scrollTrigger: {
        trigger: ".left4",
        scroller: ".main",
        // markers: true,
        start: "top 82%",
        end: "top 10%",
        // scrub: 3,
    },
    x: -200,
    duration: 1.5
});


var menu = document.querySelector(".midnaaa");
var menu2 = document.querySelector(".midnaaa2");
var nav = document.querySelector(".nav2");


menu.addEventListener('click', function() {
    nav.style.display = "flex";
    nav.style.animation = "menu 0.5s ease-out forwards";
    
});

menu2.addEventListener('click', function() {
    nav.style.display = "none";
    nav.style.animation = "menu2 0.5s ease-out forwards";
});
