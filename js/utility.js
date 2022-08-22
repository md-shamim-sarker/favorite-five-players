// Player selection function. Maximum 5 players will be selected. Including alert message if try to select more than 5 players.
function playerSelection(event) {
    const playerName = event.parentElement.parentElement.firstElementChild.textContent;
    const liQuantity = document.querySelector('ol').childElementCount;

    if(liQuantity < 5) {
        const ol = document.querySelector('ol');
        const li = document.createElement('li');
        li.textContent = playerName;
        ol.appendChild(li);
        event.classList.add('btn-disabled');
    } else {
        alert('Sorry, You can select only five players.');
    }
}

// Collect data from input field and convert that into number type value.
function getInputValue(inputId) {
    return Number(document.getElementById(inputId).value);
}

// Collect data from text field and convert that into number type value.
function getDataElement(elementId) {
    return Number(document.getElementById(elementId).textContent);
}

// Set text context into specific element field
function setTextContent(elementId, value) {
    document.getElementById(elementId).textContent = value;
}