document.addEventListener("DOMContentLoaded", function() {
    let imgBox = document.querySelector(".imgbox");
    let qrImage = document.querySelector("#qrImage");
    let qrText = document.querySelector("#qrText");
    let btn = document.querySelector(".btn");
    
    function generatorQR() {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrImage.addEventListener("load", function() {
            imgBox.classList.add("show-img");
        });
    }
    
    btn.addEventListener("click", generatorQR);
    

});
``