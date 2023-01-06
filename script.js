document.cookie = "cake=german chocolate; sameSite=lax"
document.cookie = "cake=carrot cake; sameSite=lax"
document.cookie = "pizza=pepperoni; sameSite=lax"
document.cookie = "pizza=sausage; sameSite=lax"
document.cookie = "pizza=vegetable; sameSite=lax"
localStorage.setItem("cake", "carrot cake")
localStorage.setItem("pizza", "Hawaiian")
localStorage.setItem("sandwich", "Subway Club")
sessionStorage.setItem("cake", "vanilla cake")

function setCookie(key, value) {
document.cookie = key + value
}

let cookies = document.cookie
cookies = cookies.split(';')
let cookieKeyArray = []
let cookieValueArray = []
for (let i = 0; i < cookies.length; i++) {
    cookieKeyArray.push(cookies[i].split('=')[0])
    cookieValueArray.push(cookies[i].split('=')[1])
}
document.getElementById("cookiesKeyValuePairs").innerHTML = "Cookie Key-Value Pairs: " + document.cookie
document.getElementById("cookiesKeys").innerHTML = "Keys Only: " + cookieKeyArray
document.getElementById("cookiesValues").innerHTML = "Values Only: " + cookieValueArray

//Manipulate localStorage
let localStorageKeys = Object.keys(localStorage)
document.getElementById("localStorage").innerHTML = "localStorageKeys: " + localStorageKeys

//Manipulate sessionStorage
let sessionStorageKeys = Object.keys(sessionStorage)
console.log("sessionStorageKeys: " + sessionStorage)
document.getElementById("sessionStorage").innerHTML = "sessionStorageKeys: " + sessionStorageKeys
