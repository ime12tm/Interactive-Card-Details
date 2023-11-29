const CCForm = document.querySelector("#CCForm");
const cardName = document.getElementById("cardName");
const cardNumber = document.querySelector("#cardNumber");
const expiryMonth = document.getElementById("expiryMonth");
const expiryYear = document.getElementById("expiryYear");
const cvv = document.getElementById("cvv");
const confirmBtn = document.getElementById("confirmBtn");
const completeSection = document.querySelector(".complete-section");
const completeBtn = document.getElementById("completeBtn");

const CCName = document.querySelector("#CCName");
const CCNumber = document.querySelector(".cc-number");
const CCMonth = document.querySelector("#CCMonth");
const CCYear = document.querySelector("#CCYear");
const CVVNumber = document.querySelector(".CVV-number");

cardName.addEventListener("input", function (event) {
  const errorName = document.getElementById("errorName");
  CCName.textContent = cardName.value;
  if (cardName.value.length >= 16) {
    errorName.innerHTML = "Name must be less than 16 characters.";
  } else {
    errorName.innerHTML = "";
  }
});

cardNumber.addEventListener("input", function (event) {
  CCNumber.textContent = cardNumber.value;
});

expiryMonth.addEventListener("input", function () {
  const errorMonth = document.getElementById("errorMonth");
  if (isNumericDate(expiryMonth.value)) {
    CCMonth.textContent = expiryMonth.value;
    errorDate.innerHTML = "";
  } else {
    CCMonth.textContent = "00";
    errorDate.innerHTML = "Please enter a valid month.";
  }
});

expiryYear.addEventListener("input", function () {
  const errorYear = document.getElementById("errorYear");
  if (isNumericDate(expiryYear.value)) {
    CCYear.textContent = expiryYear.value;
    errorDate.innerHTML = "";
  } else {
    CCYear.textContent = "00";
    errorDate.innerHTML = "Please enter a valid year.";
  }
});

cvv.addEventListener("input", function () {
  const errorCVV = document.getElementById("errorCVV");

  if (isNumericCVV(cvv.value)) {
    CVVNumber.textContent = cvv.value;
    errorCVV.innerHTML = "";
  } else {
    CVVNumber.textContent = "123";
    errorCVV.innerHTML = "Please enter a valid CVV.";
  }
});

confirmBtn.addEventListener("click", function () {
  completeSection.style.display = "block";
  CCForm.style.display = "none";
});

completeBtn.addEventListener("click", function () {
  completeSection.style.display = "none";
  CCForm.style.display = "block";
  resetData();
});

cardNumber.addEventListener("input", function (event) {
  let cardNumber = event.target.value;
  const errorNumber = document.getElementById("errorNumber");
  cardNumber = cardNumber
    .replace(/\D/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim()
    .substr(0, 19);
  event.target.value = cardNumber;
  if (!/\D/g.test(cardNumber)) {
    cardNumber.textContent = "";
    errorNumber.innerHTML = "Please enter a valid card number.";
  } else {
    errorNumber.innerHTML = "";
  }
});

function resetData() {
  cardName.value = "";
  cardNumber.value = "";
  expiryMonth.value = "";
  expiryYear.value = "";
  cvv.value = "";
  // CCName.textContent = cardName.placeholder;
  CCName.textContent = "Jane Appleseed";
  CCNumber.textContent = "0000 0000 0000 0000";
  CCMonth.textContent = "00";
  CCYear.textContent = "00";
  CVVNumber.textContent = "123";
}
// function onLoad() {
//   resetData();
// }
function isNumericDate(date) {
  // Check if the input is a number
  const isNumber = !isNaN(date) && !isNaN(parseFloat(date));
  // Check if the number is an integer between 1 and 12
  const isValidDate = isNumber && Number.isInteger(Number(date)) && Number(date) >= 1 && Number(date) <= 99;
  return isValidDate;
}
function isNumericCVV(num) {
  // Check if the input is a number
  const isNumber = !isNaN(num) && !isNaN(parseFloat(num));
  // Check if the number is an integer between 1 and 12
  const isValidDate = isNumber && Number.isInteger(Number(num)) && Number(num) >= 1 && Number(num) <= 999;
  return isValidDate;
}
