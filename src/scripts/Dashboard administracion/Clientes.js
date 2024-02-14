let clientsList = [{ "id_user": 1, "first_name": "John", "last_name": "Doe", "phone_number": "994653241", "email": "john.doe@example.com" },
{ "id_user": 2, "first_name": "Jane", "last_name": "Smith", "phone_number": "9876543210", "email": "jane.smith@example.com" },
{ "id_user": 3, "first_name": "Alice", "last_name": "Johnson", "phone_number": "5551112233", "email": "alice.johnson@example.com" },
{ "id_user": 4, "first_name": "Bob", "last_name": "Anderson", "phone_number": "8887774444", "email": "bob.anderson@example.com" },
{ "id_user": 5, "first_name": "Eva", "last_name": "Rodriguez", "phone_number": "1112223333", "email": "eva.rodriguez@example.com" }]

// Get a reference to the table element
const table = document.getElementById('clientsTable');
const tbody= table.querySelector('tbody')
// Iterate over the clients list and generate rows for each client
clientsList.forEach(client => {
    // Create a new row element
    const row = document.createElement('tr');

    // Create table data cells for each attribute of the client
    Object.values(client).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });

    const btnCell = document.createElement('td');
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn')
    btnDelete.classList.add('btn-danger')
    btnDelete.classList.add('btn-delete')
    btnDelete.textContent = 'Eliminar';
    btnCell.appendChild(btnDelete);
    row.appendChild(btnCell);

    // Append the row to the table
    tbody.appendChild(row);
});

const deleteButtons = document.querySelectorAll('.btn-delete');

// Iterate over each delete button and add an event listener
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the parent <tr> element of the delete button
        const parentTR = button.closest('tr');
        const modal = createModal();
        document.body.appendChild(modal);
        modal.style.display = 'flex';
        modal.addEventListener('click', function (event) {
            
            if (event.target.id === 'btn-confirm-yes') {
                parentTR.remove();
                modal.remove()
            } else modal.remove()

        });
    });
})


function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <p class='modal-text'>Confirmar</p>
        <button class="btn btn-success" id="btn-confirm-yes">Sí</button>
        <button class="btn btn-danger" id="btn-confirm-no">No</button>
      </div>
    `;
    return modal;
}