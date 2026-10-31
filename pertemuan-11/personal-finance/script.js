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
            <td>
               <button type="button">Delete</button>
               <button type="button" class="edit-transaction">Edit</button>
            </td>
            </tr>`
        })

        // 1. Cari semua tombol edit
        const editButtonElements = document.querySelectorAll(".edit-transaction");

        // 2. Untuk setiap tombol edit
        editButtonElements.forEach(function(editButton, index){

            // 3. kita akan pasang event listener click
            editButton.addEventListener("click", function(event){
                // 4. Ambil data transaksi yang sesuai dengan index
                const transaction = data[index];

                // 5. Isi form dengan data transaksi yang dipilih atau yang lagi diklik
                formEl.amount.value = transaction.amount;
                formEl.description.value = transaction.description;
                formEl.type.value = transaction.type;
                formEl.submit_type.value = "update";
                
                formEl.id.value = transaction.id;
                
                // 6. Ubah text button submit menjadi "Update Transaction"
                document.querySelector("#form-transaction-submit").textContent = "Update Transaction";
            })
        });
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
        createdAt: new Date().toISOString(),
        id: formEl.id.value
    }

    // Check apakah ini untuk tambah data atau update data
    if(formEl.submit_type.value === "update"){
        // https://6ae43e4b933120ae20f9a52d.mockapi.io/transactions/id
        fetch(url + '/' + data.id, {
        method: "PUT",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => {
            alert('Transaction updated successfully');
            formEl.reset();
            getTransactions(url);
            
            formEl.submit_type.value = "create";
            document.querySelector("#form-transaction-submit").textContent = "Tambah Transaksi";
        });
    }else{
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
    }

    
})