class AIStoreAssistant {

constructor(products, haramKeywords){

this.products = products

this.haramKeywords = haramKeywords

}

isHalal(product){

return !this.haramKeywords.some(word =>

product.title.toLowerCase().includes(word)

)

}

detectIntent(text){

text = text.toLowerCase()

if(text.includes("ارخص"))

return "cheap"

if(text.includes("افضل"))

return "best"

if(text.includes("تحت"))

return "price_limit"

if(text.includes("عطر"))

return "category_perfume"

return "search"

}

handleQuery(query){

const intent = this.detectIntent(query)

switch(intent){

case "cheap":

return this.getCheapest()

case "best":

return this.getBest()

case "price_limit":

return this.priceLimit(query)

default:

return this.search(query)

}

}

search(query){

query = query.toLowerCase()

return this.products

.filter(p => p.title.toLowerCase().includes(query))

.filter(p => this.isHalal(p))

}

getCheapest(){

return [...this.products]

.filter(p => this.isHalal(p))

.sort((a,b) => a.price - b.price)

.slice(0,5)

}

getBest(){

return [...this.products]

.filter(p => this.isHalal(p))

.sort((a,b) => b.sales - a.sales)

.slice(0,5)

}

priceLimit(query){

const match = query.match(/\d+/)

if(!match) return []

const limit = parseInt(match[0])

return this.products

.filter(p => p.price <= limit)

.filter(p => this.isHalal(p))

}

}
