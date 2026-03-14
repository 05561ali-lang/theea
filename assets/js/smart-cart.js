document.querySelectorAll(".cart-qty").forEach(input => {

input.addEventListener("change", function(){

const id = this.dataset.id

const qty = this.value

console.log("Update cart", id, qty)

})

})

document.querySelectorAll(".remove-item").forEach(btn => {

btn.addEventListener("click", function(){

const id = this.dataset.id

console.log("Remove item", id)

})

})
