
// Finding The Matching Words
const products = [
    { name: "Asus VivoBook S15", price: "62000" },
    { name: "Apple Watch", price: "60000" },
    { name: "Samsung Phone", price: "6000" },
    { name: "Apple Phone", price: "6000" }
]

function getMatchedWords(products, wordsLookingFor) {
    const matchedProducts = []
    for (const product of products) {
        if (product.name.indexOf(wordsLookingFor) != -1) {
            matchedProducts.push(product.name)
        }
    }
    return matchedProducts
}

console.log(getMatchedWords(products, "Phone"));

