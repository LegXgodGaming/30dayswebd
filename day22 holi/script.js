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
 
 
 let images = [
    
    'url("images/color1.png ")',
    'url("images/color2.png ")',
    'url("images/color3.png ")',
    'url("images/color4.png ")',
    'url("images/color5.png ")',
    'url("images/color6.png ")',
    'url("images/color7.png ")',
    'url("images/color8.png ")',
    'url("images/color9.png ")',
    'url("images/color10.png ")',
    'url("images/color11.png ")',
    'url("images/color12.png ")',
    'url("images/color13.png ")',
    'url("images/color14.png ")',
    'url("images/color15.png ")',
    'url("images/color16.png ")',

  

 ]


let page1 = document.querySelector(".page1");
page1.onclick = function(e){
    let x =e.pageX- e.target.offsetLeft;
    let y = e.pageY-e.target.offsetTop;


    let splash = document.createElement('span');
    splash.style.left = x +'px';
    splash.style.top = y +'px';

    let bg = images[Math.floor(Math.random()* images.length)];
    splash.style.backgroundImage = bg;
 
    this.appendChild(splash);

    setTimeout(() => {
        splash.remove()
    }, 4000);
}


