// Select the container div
const container = document.getElementById('vashon-gonzales-loan-calculator');

// Fetch the HTML content from your codebase
fetch('https://vashong.github.io/widgets/loan-calculator/dist/')
    .then(response => response.text())
    .then(html => {
        // Inject the HTML content into the container div
        container.innerHTML = html;

        // Dynamically create a link element for the CSS file
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://vashong.github.io/widgets/loan-calculator/dist/styles.css';

        // Append the link element to the head section of the document
        document.head.appendChild(cssLink);

        // Dynamically create a script element for the JavaScript file
        const script = document.createElement('script');
        script.src = 'https://vashong.github.io/widgets/loan-calculator/dist/script.js';

        // Append the script element to the document body
        document.body.appendChild(script);
    })
    .catch(error => {
        console.error('Error fetching content:', error);
    });
