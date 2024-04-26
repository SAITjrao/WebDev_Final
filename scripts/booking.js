/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let dayCounter = 0;
let calculatedCost = 0;

const dayButtons = document.getElementsByTagName('li');
const weeklyCostLabel = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');
const halfDayButton = document.getElementById('half');
const fullDayButton = document.getElementById('full');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


// add on click event listeners to all day buttons
for (let i = 0; i < dayButtons.length; i++) {
    console.log(dayButtons[i].innerHTML);
    dayButtons[i].addEventListener("click", colourChange);
}

function colourChange(e) {
    // set a variable to the day button being clicked  
    let day = e.target;

    // check if button is already clicked
    if (day.classList.contains("clicked") === false) {
        // add clicked class to day element
        day.classList.add("clicked");

        // count number of days
        dayCounter += 1;
    }

    // calculate total cost
    calculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", clearDays);

function clearDays() {
    // reset global variables
    dayCounter = 0;
    calculatedCost = 0;

    // iterate through list of day elements and check if they are clicked
    for (let i = 0; i < dayButtons.length; i++) {
        if(dayButtons[i].classList.contains("clicked")) {
            dayButtons[i].classList.remove("clicked");
        }
    }
    
    // calculate total cost
    calculate();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

halfDayButton.addEventListener("click", changeRate);
fullDayButton.addEventListener("click", changeRate);

function changeRate(e) {
    let btn = e.target;
    if (btn.id == "half") {
        costPerDay = 20;
        // add clicked class to half btn and remove from full
        btn.classList.add("clicked");
        fullDayButton.classList.remove("clicked");
    }
    else {
        costPerDay = 35;
        // add clicked class to full btn and remove from half
        btn.classList.add("clicked");
        halfDayButton.classList.remove("clicked");
    }
    // calculate total cost
    calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    calculatedCost = dayCounter * costPerDay;
    weeklyCostLabel.innerHTML = calculatedCost;
}
