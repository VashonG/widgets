// Function to create and append the form to the specified container
function createForm(container) {
    container.innerHTML = `
        <form id="webhookForm">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="perk">What perk are you redeeming?</label>
            <input type="text" id="perk" name="perk" required><br>

            <button type="button" onclick="sendWebhook()">Submit</button>
        </form>

        <div id="successMessage" style="display: none; color: green;">Webhook sent successfully!</div>
    `;
}

// Function to include the script dynamically with the specified webhook URL
function includeScript(webhookUrl) {
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://vashong.github.io/widgets/perks/script.js";
    
    // Pass the webhook URL as a query parameter to the script
    scriptElement.setAttribute("data-webhook-url", webhookUrl);
    
    document.body.appendChild(scriptElement);
}

// Execute these functions when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    // Create the form inside a specific container
    const container = document.getElementById("formContainer");
    createForm(container);

    // Include the script dynamically with the specified webhook URL
    includeScript("https://hooks.zapier.com/hooks/catch/17853361/3ljjh18/");
});
