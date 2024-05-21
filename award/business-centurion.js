(function() {
    // Function to create the widget
    function createWidget(params) {
        // Create the container div
        var container = document.createElement('div');
        container.className = 'BusinessCenturionRubyAward1';

        // Create the MaskGroup div
        var maskGroup = document.createElement('div');
        maskGroup.className = 'MaskGroup';

        // Create the ClipPathGroup div
        var clipPathGroup = document.createElement('div');
        clipPathGroup.className = 'ClipPathGroup';
        maskGroup.appendChild(clipPathGroup);

        // Create the BusinessCenturion div
        var businessCenturion = document.createElement('div');
        businessCenturion.className = 'BusinessCenturion';
        businessCenturion.innerHTML = 'Business<br/>Centurion';

        // Create the RubyAward div
        var rubyAward = document.createElement('div');
        rubyAward.className = 'RubyAward';
        rubyAward.innerText = 'RUBY AWARD';

        // Append elements to the container
        container.appendChild(maskGroup);
        container.appendChild(businessCenturion);
        container.appendChild(rubyAward);

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
.BusinessCenturionRubyAward1 {
  width: 24rem; /* 96 * 4 = 384px */
  height: 24rem; /* 96 * 4 = 384px */
  position: relative;
}

.MaskGroup {
  width: 24rem; /* 96 * 4 = 384px */
  height: 24rem; /* 96 * 4 = 384px */
  position: absolute;
  left: -27rem; /* -108px */
  top: -27rem; /* -108px */
}

.ClipPathGroup {
  width: 24rem; /* 96 * 4 = 384px */
  height: 24rem; /* 96 * 4 = 384px */
  position: absolute;
  left: 53.6675rem; /* 214.67px */
  top: 53.6675rem; /* 214.67px */
}

.BusinessCenturion {
  width: 24rem; /* 96 * 4 = 384px */
  height: 12rem; /* 48 * 4 = 192px */
  position: absolute;
  left: 47.5rem; /* 190px */
  top: 160rem; /* 640px */
  text-align: center;
  color: #ffbf00; /* amber-400 */
  font-size: 6rem; /* 8xl */
  font-weight: bold;
  font-family: 'Kameron', serif; /* Assuming Kameron is a serif font */
  line-height: 2.5rem; /* 10 * 0.25 = 2.5 */
}

.RubyAward {
  width: 20rem; /* 80 * 4 = 320px */
  height: 4rem; /* 16 * 4 = 64px */
  position: absolute;
  left: 95.75rem; /* 383px */
  top: 221.25rem; /* 885px */
  text-align: center;
  color: #ffbf00; /* amber-400 */
  font-size: 1.875rem; /* 3xl */
  font-weight: bold;
  font-family: 'Kameron', serif; /* Assuming Kameron is a serif font */
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
