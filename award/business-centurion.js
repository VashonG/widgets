(function() {
    // Function to create the widget
    function createWidget(params) {
        // Create the container div
        var container = document.createElement('div');
        container.className = 'award-widget';

        // Create the content div
        var content = document.createElement('div');
        content.className = 'award-content';

        // Create and append the certificate title
        var title = document.createElement('h2');
        title.innerText = 'Certificate of Achievement';
        content.appendChild(title);

        // Create and append the presentation text
        var presentedTo = document.createElement('p');
        presentedTo.innerText = 'This award is presented to';
        content.appendChild(presentedTo);

        // Create and append the recipient's name
        var recipientName = document.createElement('h3');
        recipientName.id = 'recipient-name';
        recipientName.innerText = params.name;
        content.appendChild(recipientName);

        // Create and append the issue date text
        var issuedOn = document.createElement('p');
        issuedOn.innerText = 'Issued on';
        content.appendChild(issuedOn);

        // Create and append the issue date
        var issueDate = document.createElement('h4');
        issueDate.id = 'issue-date';
        issueDate.innerText = params.date;
        content.appendChild(issueDate);

        // Append the content to the container
        container.appendChild(content);

        // Append the container to the body
        document.body.appendChild(container);
    }

    // Function to get parameters from the script tag
    function getScriptParams() {
        var scripts = document.getElementsByTagName('script');
        var script = scripts[scripts.length - 1]; // The current script
        return {
            name: script.getAttribute('data-name') || '[Name]',
            date: script.getAttribute('data-date') || '[Date]'
        };
    }

    // Function to inject styles
    function injectStyles() {
        var styles = `
            .award-widget {
                width: 300px;
                padding: 20px;
                border: 2px solid #000;
                text-align: center;
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                margin: 20px auto;
            }

            .award-widget .award-content h2 {
                font-size: 1.5em;
                margin-bottom: 10px;
            }

            .award-widget .award-content h3 {
                font-size: 1.2em;
                margin: 10px 0;
            }

            .award-widget .award-content h4 {
                font-size: 1em;
                margin-top: 5px;
                color: #555;
            }
        `;
        var styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }

    // Inject styles
    injectStyles();

    // Get parameters and create the widget
    var params = getScriptParams();
    createWidget(params);
})();
