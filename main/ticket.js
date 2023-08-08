

const ticket = document.getElementById("ticket");
const card = document.getElementById("card");
const x = document.getElementById("x");
const ticketBtn = document.querySelectorAll(".ticket-btn");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");
const pay = document.getElementById("pay")
const form = document.querySelector("form")
const name = document.getElementById("name");
const text = document.getElementById("text");
const price = 2000



ticket.addEventListener("click", () => {
    card.style.display = "block";
})

x.addEventListener("click", () => {
    card.style.display = "none";
})

ticketBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.backgroundColor = "#5f379f";
    });
})


quantity.addEventListener("keyup", () => {
    let qty = quantity.value;
    let totalPrice = price*qty;
    total.innerHTML = `₦${totalPrice}`;
})


form.addEventListener("submit", (e) => {
    
    const username = name.value;
    text.innerHTML = `Dear, ${username} your ticket details will be sent to your Email immediately, check back in the next 5 minutes`;

    e.preventDefault()
})
