let form = document.querySelector('.skins-form');
let skinsTable = document.querySelector('.skins-table');
let clearButton = document.querySelector('.clear');

document.addEventListener('DOMContentLoaded', function () {
    const savedData = JSON.parse(localStorage.getItem('skinsCollection')) || [];
    savedData.forEach(skin => addTableRow(skin));
})

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.querySelector('.name-input').value;
    let weapon = document.querySelector('.weapon-select').value;
    let quality = document.querySelector('.radio-input:checked').value;
    let exterior = document.querySelector('.exterior-select').value;
    let price = document.querySelector('.price-input').value;

    const newSkin = { name, weapon, quality, exterior, price };

    const currentData = JSON.parse(localStorage.getItem('skinsCollection')) || [];
    currentData.push(newSkin);
    localStorage.setItem('skinsCollection', JSON.stringify(currentData));

    addTableRow(newSkin);

    form.reset();
});

skinsTable.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        const row = event.target.closest('.table-row');
        const index = Array.from(skinsTable.children).indexOf(row);

        const currentData = JSON.parse(localStorage.getItem('skinsCollection')) || [];
        currentData.splice(index, 1);
        localStorage.setItem('skinsCollection', JSON.stringify(currentData));

        row.remove();
    }
});

clearButton.addEventListener('click', function(event) {
    event.preventDefault();
    form.reset();
});

function addTableRow(skin) {
    let newRow = document.createElement('div');
    newRow.classList.add('table-row');
    newRow.innerHTML += `
            <span class="table-cell">${skin.name}</span>
            <span class="table-cell">${skin.weapon}</span>
            <span class="table-cell">${skin.quality}</span>
            <span class="table-cell">${skin.exterior}</span>
            <span class="table-cell">${skin.price}</span>
            <button class="delete" type="button">Delete row</button>
    `;

    skinsTable.appendChild(newRow);
}