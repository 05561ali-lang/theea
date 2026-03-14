document.querySelectorAll(".add-to-cart").forEach(btn => {

btn.addEventListener("click", function(){

const id = this.dataset.productId

console.log("Add to cart:", id)

})

})
