// show price when service selected
// calculate total price
function calculateTotal() {
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    let total = 0;

    checkboxes.forEach(cb => {
        if (cb.checked) {
            total += parseInt(cb.getAttribute("data-price"));
        }
    });

    document.getElementById("total").innerHTML = "Total: ₹" + total;
}


// booking function
function bookNow() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    let services = [];
    let total = 0;

    checkboxes.forEach(cb => {
        if (cb.checked) {
            services.push(cb.value);
            total += parseInt(cb.getAttribute("data-price"));
        }
    });

    if (name === "" || services.length === 0 || date === "" || time === "") {
        alert("Please fill all details");
        return;
    }

    // show booking confirmation
    document.body.innerHTML += `
        <h3>✅ Booking Confirmed!</h3>
        <p>Name: ${name}</p>
        <p>Services: ${services.join(", ")}</p>
        <p><b>Total Bill: ₹${total}</b></p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
    `;
}