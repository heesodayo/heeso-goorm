// 1. 데이터 바구니 만들기 -> 2.버튼 데이터 불러오기 -> 3.클릭시 동작 구현하기 -> 4.화면에 표시하기

const cart = {};
const menu = document.querySelector("#menu");
const cartDisplay = document.querySelector("#cart");
const totalDisplay = document.querySelector("#total");

menu.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const name = event.target.getAttribute("data-name");
        const price = event.target.getAttribute("data-price");
    if (cart[name]) { cart[name].count++; }
    else { cart[name] = {price, count: 1}; }
    updateCart();
    console.log(cart);
    }
});

function updateCart() {
    cartDisplay.innerHTML = "";
    let total = 0;
    for (const name in cart) {
        const { price, count } = cart[name];
        total += price * count;
        const item = document.createElement("div");
        item.textContent = `${name} x${count} (${(price * count).toLocaleString()}원)`;
        cartDisplay.appendChild(item);
    }
    totalDisplay.textContent = total.toLocaleString();
}