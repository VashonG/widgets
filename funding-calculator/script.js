  function formatCurrency(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function calculateFunding() {
    var mrrInput = document.getElementById('mrr');
    var creditScoreInput = document.getElementById('credit-score');
    
    var mrr = parseFloat(mrrInput.value.replace(/[^\d.]/g, ''));
    var creditScore = parseInt(creditScoreInput.value.replace(/[^\d]/g, ''));

    var baseFunding = 17000;
    var extraFundingPer1k = 800;

    if (isNaN(mrr) || mrr < 20000 || creditScore < 600) {
        document.getElementById('result').textContent = "Business does not meet minimum MRR requirement or minimum credit score.";
        return;
    }

    // Apply credit score adjustments
    var creditMultiplier = 1;
    if (creditScore >= 600 && creditScore <= 650) {
        creditMultiplier = 0.5; // Cut funding in half
    } else if (creditScore >= 651 && creditScore <= 700) {
        creditMultiplier = 0.75; // Cut funding by 25%
    } else if (creditScore >= 751 && creditScore <= 850) {
        creditMultiplier = 1.1; // Increase funding by 10%
    }

    // Calculate total funding
    var aboveMinimum = Math.max(mrr - 20000, 0);
    var extraFunding = Math.floor(aboveMinimum / 1000) * extraFundingPer1k;
    var totalFunding = baseFunding * creditMultiplier + extraFunding;

    // Calculate loan term
    var loanTerm;
    if (totalFunding >= 100000 && totalFunding < 1000000) {
        loanTerm = 5; // 5-year payback for 6-digit amounts
    } else if (totalFunding >= 1000000 && totalFunding < 10000000) {
        loanTerm = 8; // 8-year payback for 7-digit amounts
    } else {
        loanTerm = 2; // 2-year payback for all other amounts
    }

    // Generate amortization schedule with dynamic monthly interest rate
    var monthlyInterestRate = getInterestRate(creditScore) / 12;
    var schedule = calculateAmortizationSchedule(totalFunding, monthlyInterestRate, loanTerm);

    // Display the calculated funding amount and amortization schedule
    var resultText = "The business can receive " + formatCurrency(totalFunding) + " in funding with a " + loanTerm + "-year payback period.\n";
    resultText += "<table><tr><th>Year</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Balance</th></tr>";
    for (var i = 0; i < schedule.length; i++) {
        resultText += "<tr><td>" + schedule[i].year + "</td><td>" + formatCurrency(schedule[i].payment) + "</td><td>" + formatCurrency(schedule[i].principal) + "</td><td>" + formatCurrency(schedule[i].interest) + "</td><td>" + formatCurrency(schedule[i].balance) + "</td></tr>";
    }
    resultText += "</table>";
    document.getElementById('result').innerHTML = resultText;
}

function getInterestRate(creditScore) {
    if (creditScore >= 600 && creditScore <= 620) {
        return 0.20; // 20% interest rate
    } else if (creditScore >= 621 && creditScore <= 640) {
        return 0.17; // 17% interest rate
    } else if (creditScore >= 641 && creditScore <= 660) {
        return 0.14; // 14% interest rate
    } else if (creditScore >= 661 && creditScore <= 680) {
        return 0.11; // 11% interest rate
    } else if (creditScore >= 681) {
        return 0.09; // 9% interest rate
    }
}

function calculateAmortizationSchedule(totalFunding, monthlyInterestRate, loanTerm) {
    var schedule = [];
    var remainingBalance = totalFunding;

    for (var i = 1; i <= loanTerm * 12; i++) {
        var monthlyPayment = calculateMonthlyPayment(remainingBalance, monthlyInterestRate, loanTerm * 12 - i + 1);
        var interest = remainingBalance * monthlyInterestRate;
        var principal = monthlyPayment - interest;
        remainingBalance -= principal;

        schedule.push({
            year: Math.ceil(i / 12),
            payment: monthlyPayment,
            principal: principal,
            interest: interest,
            balance: remainingBalance
        });

        if (remainingBalance <= 0) {
            break;
        }
    }

    return schedule;
}

function calculateMonthlyPayment(remainingBalance, monthlyInterestRate, numberOfPayments) {
    var monthlyPayment = remainingBalance * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    return monthlyPayment;
}
