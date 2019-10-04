document.addEventListener("DOMContentLoaded", initiateDom);
let amount;
let interest;
let yearToRepay;
let monthlyPayment;
let totalPayment;
let totalInterest;
let form;
let principle;
let card;
let heading;
let results;
let loader;

// DOM Initialization
function initiateDom() {
  initiateUI();
  initiateListeners();
}

// Load UI Components
function initiateUI() {
  amount = document.querySelector("#amount");
  interest = document.querySelector("#interest");
  yearToRepay = document.querySelector("#years");
  form = document.querySelector("#loan-form");
  monthlyPayment = document.querySelector("#monthly-payment");
  totalPayment = document.querySelector("#total-payment");
  totalInterest = document.querySelector("#total-interest");
  card = document.querySelector(".card");
  heading = document.querySelector(".heading");
  loader = document.querySelector("#loader");
  results = document.querySelector("#results");
}

// Load all Listners
function initiateListeners() {
  form.addEventListener("submit", calculateLoan);
}

// Loan Calculation
function calculateLoan(e) {
  e.preventDefault();
  principle = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(yearToRepay.value) * 12;

  // Monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle * x * calculatedInterest) / (x - 1);
  if (isFinite(monthly)) {
    results.style.display = "none";
    loader.style.display = "block";
    setTimeout(function() {
      setUI(
        monthly.toFixed(2),
        (monthly * calculatedPayments).toFixed(2),
        (monthly * calculatedPayments - principle).toFixed(2)
      );
    }, 2000);
  } else {
    showError("Please Check your numbers");
  }
}

// Set UI
function setUI(mP, tP, tI) {
  monthlyPayment.value = mP;
  totalPayment.value = tP;
  totalInterest.value = tI;
  loader.style.display = "none";
  results.style.display = "block";
}

// Show Error
function showError(errMsg) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(errMsg));
  card.insertBefore(errorDiv, heading);
  // Clear error

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
