const ordersList = [
	{
		"id_order" : 1,
		"users_id_user" : 1,
		"order_date" : "2024-02-02",
		"total" : 780.00,
		"status" : "pending"
	},
	{
		"id_order" : 2,
		"users_id_user" : 2,
		"order_date" : "2024-02-03",
		"total" : 760.00,
		"status" : "approved"
	},
	{
		"id_order" : 3,
		"users_id_user" : 3,
		"order_date" : "2024-02-04",
		"total" : 740.00,
		"status" : "pending"
	},
	{
		"id_order" : 4,
		"users_id_user" : 4,
		"order_date" : "2024-02-05",
		"total" : 390.00,
		"status" : "approved"
	},
	{
		"id_order" : 5,
		"users_id_user" : 5,
		"order_date" : "2024-02-06",
		"total" : 780.00,
		"status" : "shipped"
	}
]
const ordersDetails= [
	{
		"orders_id_order" : 1,
		"product_name" : "French Poodle",
		"quantity" : 2,
		"price" : 780.00,
		"status" : "pending"
	},
	{
		"orders_id_order" : 2,
		"product_name" : "Cerebro Anatomico",
		"quantity" : 1,
		"price" : 390.00,
		"status" : "approved"
	},
	{
		"orders_id_order" : 2,
		"product_name" : "Pulmon Anatomico",
		"quantity" : 1,
		"price" : 370.00,
		"status" : "approved"
	},
	{
		"orders_id_order" : 3,
		"product_name" : "Charm Maestra",
		"quantity" : 1,
		"price" : 370.00,
		"status" : "pending"
	},
	{
		"orders_id_order" : 3,
		"product_name" : "Charm Microscopio",
		"quantity" : 1,
		"price" : 370.00,
		"status" : "pending"
	},
	{
		"orders_id_order" : 4,
		"product_name" : "Schnauzer",
		"quantity" : 1,
		"price" : 390.00,
		"status" : "approved"
	},
	{
		"orders_id_order" : 5,
		"product_name" : "French Poodle",
		"quantity" : 1,
		"price" : 390.00,
		"status" : "shipped"
	},
	{
		"orders_id_order" : 5,
		"product_name" : "Schnauzer",
		"quantity" : 1,
		"price" : 390.00,
		"status" : "shipped"
	}
]


let ordersTable = document.querySelector('.ordersTable')
let tbody = ordersTable.querySelector('tbody');

ordersList.forEach(order => {
    const row = document.createElement('tr')
	Object.entries(order).forEach(([key, attribute]) => {
        if (key == 'id_order') {
			const rowTh = document.createElement('th')
			rowTh.scope = 'row'
			rowTh.textContent = attribute
			row.appendChild(rowTh)
		}else{
        const cell = document.createElement('td')
        cell.textContent = attribute
        row.appendChild(cell)}
    })

	const btnCell = document.createElement('td');
    const btnDelete = document.createElement('button');
	btnDelete.type = 'button'
    btnDelete.classList.add('btn')
	btnDelete.classList.add('btn-secondary')
	btnDelete.classList.add('btn-detalles')
    btnDelete.textContent = 'Detalles';
    btnCell.appendChild(btnDelete);
    row.appendChild(btnCell);
	
    tbody.appendChild(row);
})

const detailsBtns = document.querySelectorAll('.btn-detalles');

detailsBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const orderId = parseInt(btn.closest('tr').querySelector('th').textContent);
        const orderDetails = ordersDetails.filter(detail => detail.orders_id_order === orderId);
        const modal = createModal(orderDetails);
        document.body.appendChild(modal);
        modal.style.display = 'flex';
    });
});

function createModal(orderDetails) {
	const orderTotal = orderDetails.reduce((total,orderdetail) => total += orderdetail.price, 0);
    const modal = document.createElement('div');
    modal.className = 'modal';
	modal.innerHTML = `
	<div class="modal-content">
		<span class="close">&times;</span>
		<table class="table table-bordered table-hover">
		<caption>Orden #${orderDetails[0].orders_id_order}</caption>
		<thead>
		<tr>
		<th scope="col">Producto</th>
		<th scope="col">Cantidad:</th> 
		<th scope="col">Precio:</th> 
		</tr>
		</thead>
		<tbody>
			${orderDetails.map(detail => `
				<tr scope="row">
					<td>${detail.product_name}</td>
					<td>${detail.quantity}</td>
					<td>${detail.price}</td>
				</tr>
			`).join('')}
			<tr >
			<td></td>
			<td><strong>TOTAL</td>
			<td>${orderTotal}</td>
			</tr>
		</tbody>
		</table>
	</div>
`;

    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    return modal;
}