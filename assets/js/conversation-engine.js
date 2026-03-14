class ConversationEngine {

constructor(products){

this.products = products

this.state = "start"

this.context = {}

}

handleMessage(text){

text = text.toLowerCase()

if(this.state === "start"){

this.state = "ask_category"

return "ما نوع المنتج الذي تبحث عنه؟"

}

if(this.state === "ask_category"){

this.context.category = text

this.state = "ask_budget"

return "كم ميزانيتك؟"

}

if(this.state === "ask_budget"){

const match = text.match(/\d+/)

if(match){

this.context.budget = parseInt(match[0])

}

this.state = "recommend"

return this.recommendProducts()

}

}

recommendProducts(){

let results = this.products

.filter(p =>
p.category.toLowerCase().includes(this.context.category)
)

if(this.context.budget){

results = results.filter(p => p.price <= this.context.budget)

}

results = results.slice(0,3)

return results

}

}
