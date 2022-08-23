const cartArray = [];

function display(cartPlayer) {

    const tableBody = document.getElementById("cart-players");
    tableBody.innerHTML = "";

    for (let i = 0; i < cartPlayer.length; i++) {
        const name = cartArray[i].playerName;
        const tr = document.createElement("tr");
        //   $name
        tr.innerHTML =
            `
            <th>${i + 1}</th>
            <td>${name}</td>`
            ;
        tableBody.appendChild(tr);
    }

}

function selectToPlayer(player) {
    const playerName = player.parentNode.parentNode.children[0].innerText;

    if (cartArray.length > 4) {
        alert("you cannot select more 5")
    }
    else {
        const playerobj = {
            playerName: playerName,
        }
        cartArray.push(playerobj);
        player.disabled = true;
    }

    console.log(cartArray);

    document.getElementById("total-added-player").innerText = cartArray.length;
    display(cartArray);
}



// Initializing value
const perPlayerBudget = document.getElementById('per-player-budget');
const playerExpenses = document.getElementById('playerExpenses');

const managerBudget = document.getElementById('manager-budget');

const coachBudget = document.getElementById('coach-budget');

const totalExpence = document.getElementById('total-cost');

document.getElementById('total-calculate').style.opacity = "0.5";


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

    const totalPlayerBudget = perPlayerBudget * cartArray.length;


    // playerExpenses.innerHTML = totalPlayerBudget;
    playerExpenses.innerText = totalPlayerBudget;

    if (totalPlayerBudget) {
        document.getElementById('total-calculate').style.opacity = "1";

    }

    return totalPlayerBudget;
}

// Decliaring click calculate function
document.getElementById('calculate-btn').addEventListener('click', function () {

    let PPB = parseInt(perPlayerBudget.value);
    let isPerPlayerBudget = cheakNumber(PPB);

    if (isPerPlayerBudget) {
        handelTotalPlayerBudget(PPB);

    }

    else {
        document.getElementById('error-messege').style.display = "block";
        document.getElementById('positive-messege').style.display = "block";
        perPlayerBudget.innerText = 0;
        coachBudget.innerHTML = 0;
        coachBudget.innerText = 0;
    }



});

document.getElementById('total-calculate').addEventListener('click', function () {

    let CB = parseInt(coachBudget.value);
    let MB = parseInt(managerBudget.value);
    let PPB = parseInt(perPlayerBudget.value);

    let isPerPlayerBudget = cheakNumber(PPB);
    let isCoachBudget = cheakNumber(CB);

    let totalPlayerBudget = handelTotalPlayerBudget(PPB);

    let isManagerBudget = cheakNumber(MB);



    if (isPerPlayerBudget && isCoachBudget && isManagerBudget) {

        totalCost(totalPlayerBudget, CB, MB);
    }
    else {
        document.getElementById('error-manager').style.display = "block";
        perPlayerBudget.innerText = 0;
        coachBudget.innerHTML = 0;
        coachBudget.innerText = 0;
    }
});

// reset all value
document.getElementById('reset-btn').addEventListener('click', function () {
    perPlayerBudget.value = '';
    coachBudget.value = '';
    managerBudget.value = '';
    totalExpence.innerText = 0;
    playerExpenses.innerText = 0;




    document.getElementById('positive-messege').style.display = "none";
    document.getElementById('error-messege').style.display = "none";
    document.getElementById('error-manager').style.display = "none";

});




