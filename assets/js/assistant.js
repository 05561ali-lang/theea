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
