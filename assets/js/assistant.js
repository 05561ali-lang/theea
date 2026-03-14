const panel = document.getElementById("assistant-panel")

document.getElementById("assistant-toggle")
.addEventListener("click", function(){

panel.style.display =
panel.style.display === "none"
? "block"
: "none"

})

function askAssistant(){

const query =
document.getElementById("assistant-input").value

const msg =
document.createElement("div")

msg.innerText = "🔎 البحث عن: " + query

document
.getElementById("assistant-messages")
.appendChild(msg)

}
let assistant

function initAssistant(products, haramKeywords){

assistant = new AIStoreAssistant(products, haramKeywords)

}

function askAssistant(){

const query = document
.getElementById("assistant-input")
.value

const results = assistant.handleQuery(query)

const container =
document.getElementById("assistant-messages")

container.innerHTML = ""

results.forEach(product => {

const div = document.createElement("div")

div.innerHTML = `<strong>${product.title}</strong> <br>
${product.price}`

container.appendChild(div)

})

}
