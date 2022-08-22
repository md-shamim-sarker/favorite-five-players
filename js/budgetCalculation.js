// Using an event listener to 'Calculate' button with validation
document.getElementById('calculate-btn').addEventListener('click', () => {
    const perPlayerCost = getInputValue('per-player-cost');
    const liQuantity = document.querySelector('ol').childElementCount;

    // Validation Start
    if(isNaN(perPlayerCost)) {
        alert('Please, Enter a valid number amount.');
        return;
    }
    if(perPlayerCost <= 0) {
        alert('Please, Enter some amount.');
        return;
    }
    if(liQuantity < 1) {
        alert('Favorite player list is empty. Please, select some players.');
        return;
    }
    // Validation End

    const selectedPlayer = document.querySelector('ol').childElementCount;
    const playerExpenses = perPlayerCost * selectedPlayer;

    setTextContent('player-expenses', playerExpenses);
});

// Using an event listener to 'Calculate Total' button with validation
document.getElementById('total-btn').addEventListener('click', () => {
    const playerExpenses = getDataElement('player-expenses');
    const managerCost = getInputValue('manager-cost');
    const coachCost = getInputValue('coach-cost');

    // Validation Start
    if(isNaN(managerCost) || isNaN(coachCost)) {
        alert('Please, Enter valid number amount.');
        return;
    }
    if(managerCost <= 0 || coachCost <= 0) {
        alert('Please, Enter some amount.');
        return;
    }
    // Validation End

    const totalCost = playerExpenses + managerCost + coachCost;
    setTextContent('total-cost', totalCost);
});