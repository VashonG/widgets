document.addEventListener("DOMContentLoaded", function () {
    const userSlider = document.getElementById("userSlider");
    const invoiceSlider = document.getElementById("invoiceSlider");
    const userValue = document.getElementById("userValue");
    const invoiceValue = document.getElementById("invoiceValue");
    const totalEarnings = document.getElementById("totalEarnings");

    userSlider.addEventListener("input", updateValues);
    invoiceSlider.addEventListener("input", updateValues);

    function updateValues() {
        const users = parseInt(userSlider.value);
        const invoices = parseInt(invoiceSlider.value);
        const earnings = users * invoices * 0.75;

        userValue.textContent = users;
        invoiceValue.textContent = invoices;
        totalEarnings.textContent = earnings.toFixed(2);
    }
});