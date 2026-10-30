const formEl = document.querySelector('#form-transaction');
const url = 'https://6ae43e4b933120ae20f9a52d.mockapi.io/transactions';

function getTransactions(url){
    fetch(url).then(response => response.json()).then(data => {
        // Render Data
        const tableBodyElement = document.querySelector('#table-transactions tbody')

        if(data.length === 0) {
            tableBodyElement.innerHTML = '<tr><td colspan="5">There is no data</td></tr>'
        }

        // Reset table body
        tableBodyElement.innerHTML = '';

        data.forEach(transaction => {
            // String literal
            tableBodyElement.innerHTML += `<tr>
            <td>${transaction.id}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.description}</td>
            <td>${transaction.type}</td>
            <td>${transaction.createdAt}</td>
            </tr>`
        })
    })
}

getTransactions(url);

formEl.addEventListener('submit', (event) => {
    // Cegah form submit default behavior
    event.preventDefault();

    const data = {
        amount: formEl.amount.value,
        description: formEl.description.value,
        type: formEl.type.value,
        createdAt: new Date().toISOString()
    }

    fetch(url, {
        method: "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
        alert('Transaction added successfully');
        formEl.reset();
        getTransactions(url);
    });
})