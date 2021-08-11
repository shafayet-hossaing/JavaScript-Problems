// Problem Solving Camp By Programming Hero

/*
১) মনে করো  একটা Array  ভিতরে এলিমেন্ট হিসেবে object থাকবে। তোমার কাজ হচ্ছে একটা ফাংশন লেখা যে ফাংশনের কাজ হচ্ছে কোন একটা Array কে সে ইনপুট হিসেবে নিবে সেই Array ভিতরে object থাকলে সেই objectের প্রপার্টি ও ভ্যালুকে এক্সেস করে তা array আকারে পাঠাবে।
*/

const arrays = [
    { name: "Shafalyet", id: 123 },
    { name: "Shafu", id: 125 },
]
function getObject(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        let text = ""
        for (let property in element) {
            text += property + " : " + element[property] + ", "
        }
        result.push(text)
    }
    return result
}
console.log(getObject(arrays));








/*
২)  মনে করো তুমি একটা ই-কমার্স ওয়েব সাইট বানাইছো। তোমার কাছে প্রডাক্টগুলো আছে  সেই প্রোডাক্টের ইনফরমেশনগুলো (যেমনঃ প্রোডাক্টের নাম,  প্রোডাক্টের আইডি এবং স্টকে কি পরিমাণে প্রোডাক্ট আছে ) ডাটাবেজে object আকারে সেভ করে রেখেছ।

এখন তোমার কাজ হচ্ছে তুমি একটা ফাংশন লিখবা যেই ফাংশনের কাজ হচ্ছে সে ইনপুট আকারে প্রোডাক্টের নাম দিবে এবং সে ঐ object থেকে যে প্রোডাক্টের নাম ইনপুট হিসেবে নিয়েছে তা বাদে বাকিগুলো Array আকারে রিটার্ন করবে।
*/
var products = [
    {
        productName: "laptop",
        productId: 12,
        stock: 3
    },
    {
        productName: "monitor",
        productId: 15,
        stock: 8
    },
    {
        productName: "Mobile",
        productId: 82,
        stock: 6
    },
]

function productGet(productName) {
    let restProducts = []
    for (let i = 0; i < products.length; i++) {
        const element = products[i];

        for (const value in element) {
            if (value == "productName" && element[value] != productName) {
                restProducts.push(element)
            }
        }

    }
    return restProducts
}
console.log(productGet("laptop"));











/*
১) মনে করো তুমি একটা ই-কমার্স ওয়েব সাইট বানাইছো। তোমার কাছে প্রডাক্টগুলো আছে  সেই প্রোডাক্টের ইনফরমেশনগুলো (যেমনঃ প্রোডাক্টের নাম,  প্রোডাক্টের আইডি এবং স্টকে কি পরিমাণে প্রোডাক্ট আছে ) ডাটাবেজে object আকারে সেভ করে রেখেছ।

এখন তোমার কাজ হচ্ছে তুমি একটা ফাংশন লিখবা যেই ফাংশনের কাজ হচ্ছে সে ইনপুট আকারে প্রোডাক্টের নাম দিবে এবং সে ঐ object থেকে যে প্রোডাক্টের নাম ইনপুট হিসেবে নিয়েছে তরসব ইনফরমেশন  Array আকারে রিটার্ন করবে।
*/


let products = [
    {
        pName: "laptop",
        productId: 123,
        stock: 2
    },
    {
        pName: "mobile",
        productId: 125,
        stock: 8
    },
]

function getProductInfo(productNames) {
    let result = []
    for (let i = 0; i < products.length; i++) {
        const element = products[i]
        for (let value in element) {
            if (element[value] == productNames) {
                result.push(element)
            }
        }
    }
    return result
}

console.log(getProductInfo("mobile"));