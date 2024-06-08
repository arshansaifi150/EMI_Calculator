const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const loanAmount = document.querySelector("#loan-amount").value;
  const interestRate = document.querySelector("#interest-rate").value;
  const monthsToPay = document.querySelector("#months-toPay").value;
  const showEmi = document.querySelector(".show-emi");
  const interest = (loanAmount * (interestRate * 0.01)) / monthsToPay;
  const Emi = loanAmount / monthsToPay + interest;
  showEmi.innerHTML = `<h3>EMI:- ${Emi.toFixed(2)} $/Month</h3>`;
  const totalInterestMoney = document.querySelector(".loan-with-interest");

  const moneyWithInterest = (Emi * monthsToPay).toFixed(2);

  totalInterestMoney.innerHTML = `<h3>Total Loan with interest:- ${moneyWithInterest} $</h3>`;
  // console.log(loanAmount)
  // console.log(interestRate)
  // console.log(monthsToPay)
  form.reset();
});
