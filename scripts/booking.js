/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let dailyRate = 35;
let numberOfDays = 0;
let totalCost = 0;

const days = document.querySelectorAll(".day-selector li");
const fullDay = document.getElementById("full");
const halfDay = document.getElementById("half");
const clearDays = document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

days.forEach((day) => {
  day.addEventListener("click", () => {
    // checking whether the day is selected
    if (!day.classList.contains("clicked")) {
      day.classList.add("clicked");
      numberOfDays += 1;
    } else {
      day.classList.remove("clicked");
      numberOfDays -= 1;
    }
    calculateCost();
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearDays.addEventListener("click", () => {
  days.forEach((day) => {
    day.classList.remove("clicked");
  });
  numberOfDays = 0;
  totalCost = 0;
  calculateCost();
});
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDay.addEventListener("click", () => {
  dailyRate = 20;
  fullDay.classList.remove("clicked");
  halfDay.classList.add("clicked");
  calculateCost();
});
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener("click", () => {
  dailyRate = 35;
  fullDay.classList.add("clicked");
  halfDay.classList.remove("clicked");
  calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
  totalCost = dailyRate * numberOfDays;
  calculatedCost.innerHTML = totalCost;
}

calculateCost();
