// Initializing value
const perPlayerBudget = document.getElementById('per-player-budget');
const playerExpenses = document.getElementById('playerExpenses');

const managerBudget = document.getElementById('manager-budget');

const coachBudget = document.getElementById('coach-budget');

const totalExpence = document.getElementById('total-cost');

document.getElementById('total-calculate').style.opacity = "0.2";


// Function CAN cheak the value string or number
function cheakNumber(inputValue) {

    if (isNaN(inputValue) || inputValue == '' || inputValue < 0) {
        return false;
    }

    else {
        document.getElementById('error-messege').style.display = "none";
        document.getElementById('positive-messege').style.display = "none";
        return true;
    }
}

// all value adding function
function totalCost(totalPlayerBudget, CB, MB) {


    let Total = MB + totalPlayerBudget + CB;

    totalExpence.innerText = Total;
}
//update managerBudget
function handelTotalPlayerBudget(perPlayerBudget) {

    const totalPlayerBudget = perPlayerBudget * 5;


    // playerExpenses.innerHTML = totalPlayerBudget;
    playerExpenses.innerText = totalPlayerBudget;

    if (totalPlayerBudget) {
        document.getElementById('total-calculate').style.opacity = "1";

    }

    return totalPlayerBudget;
}



