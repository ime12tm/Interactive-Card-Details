const sectionRight = document.querySelector(".section-right");
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

// if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
//   alert("Invalid card number. Please enter a 16-digit number.");
//   return;
// }
cardName.addEventListener("input", function () {
  if (cardName.length > 5) {
    CCName.textContent = "Jane Appleseed";
  } else {
    CCName.textContent = cardName.value;
  }
});

cardNumber.addEventListener("input", function () {
  CCNumber.textContent = cardNumber.value;
});
expiryMonth.addEventListener("input", function () {
  CCMonth.textContent = expiryMonth.value;
});
expiryYear.addEventListener("input", function () {
  CCYear.textContent = expiryYear.value;
});
cvv.addEventListener("input", function () {
  CVVNumber.textContent = cvv.value;
});
confirmBtn.addEventListener("click", function () {
  sectionRight.style.display = "none";
  completeSection.style.display = "block";
});
completeBtn.addEventListener("click", function () {
  completeSection.style.display = "none";
  sectionRight.style.display = "block";
});
