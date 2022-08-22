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

function getInputValue(inputId) {
    return Number(document.getElementById(inputId).value);
}

function getDataElement(elementId) {
    return Number(document.getElementById(elementId).textContent);
}

function setTextContent(elementId, value) {
    document.getElementById(elementId).textContent = value;
}