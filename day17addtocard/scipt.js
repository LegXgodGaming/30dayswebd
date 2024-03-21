var products=[
    {name:"black car", headline: "fast as lion" ,price: "20,00,000" ,image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww"},
    {name:"blue car", headline: "cool as tiger" ,price: "26,00,000" ,image:"https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"white car", headline: "fast as deer" ,price: "20,30,000" ,image:"https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"},


];

var cart =[];

var popular = [
    {name:"snow car", headline: "beast as bear" ,price: "25,00,000" ,image:"https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"bloody car", headline: "killer as panter" ,price: "29,00,000" ,image:"https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"big car", headline: "hug as elephant" ,price: "31,30,000" ,image:"https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];

function addpopular(){
  var bb =[];
  popular.forEach(function(polu){
    bb+=` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
        <img class="w-full h-full object-cover"
            src="${polu.image}"
            alt="">
    </div>
    <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${polu.name}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${polu.headline}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">${polu.price}</h4>
    </div>
</div>`;

  });
  document.querySelector(".populars").innerHTML = bb;
};
addpopular();

function addproducts(){



var aa =[];
products.forEach(function(product,index){
   aa+=` <div class="product w-fit rounded-xl p-2 bg-white">
   <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
   <img class="w-full h-full object-cover" src="${product.image}"/>
   </div>
   <div class="data w-full px-2 py-5">
       <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
       <div class="flex justify-between w-full items-center mt-2">
           <div class="w-1/2">
               <h3 class="font-semibold opacity-20">${product.headline}</h3>
               <h4 class="font-semibold mt-2">Rs ${product.price}</h4>
           </div>
           <button data-index=${index}  class=" add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i data-index=${index}
                   class=" add ri-add-line"></i></button>
       </div>
   </div>
</div>
   `;
})

document.querySelector(".products").innerHTML = aa;
}

addproducts();

function addtocard() {
    document.querySelector(".products").addEventListener("click", function (details) {
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index]);
            
        };
       
    });
    
};

addtocard();

function showcard() {
    var cartExpnd = document.querySelector(".cartexpnd");
    document.querySelector(".carticon").addEventListener("click", function() {
        if (cartExpnd.style.display === "block") {
            cartExpnd.style.display = "none";
        } else {
            var dd = "";
            cart.forEach(function(prod,index) {
                dd += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                        <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                            <img class="w-full h-full object-cover" src="${prod.image}"/>
                        </div>
                        <div>
                            <h3 class="font-semibold">${prod.name}</h3>
                            <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                        </div>
                    </div>`;
            });
            document.querySelector(".cartexpnd").innerHTML = dd;
            cartExpnd.style.display = "block";
        }
    });
}


    


showcard();