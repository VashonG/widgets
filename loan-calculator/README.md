# Loan Calculator Widget Integration Guide

To integrate the loan calculator widget into your web page, follow these steps:

1. Place this snippet in between the `<head>` `</head>` tags of your HTML file:

```html
<base href="https://vashong.github.io/widgets/loan-calculator/dist/">
```

2. Add these 2 snippets just before the `</body>` tag of your HTML file:

```html
<script src="https://vashong.github.io/widgets/loan-calculator/loan-calculator-loader.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js"></script>
```

3. Finally, add this snippet where you want to render the loan calculator on your web page:

```html
<div id="vashon-gonzales-loan-calculator"></div>
```

That's it! Your web page should now have the loan calculator integrated and ready for use.
