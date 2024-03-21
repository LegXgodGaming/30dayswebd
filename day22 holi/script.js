 let images = [
    'url(" https://zeevector.com/wp-content/uploads/2021/02/Black-Color-Splash-PNG-768x699.png ")',
    'url("  ")',
    'url("  ")',
    'url("  ")',
    'url("  ")',
    'url("  ")',
    'url("  ")',
    'url("  ")',
    'url("  ")',

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
