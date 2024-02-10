-- traer detalles de orden con nombre de productos, cantidad y precio
SELECT od.orders_id_order, p.product_name, od.quantity, od.price, os.status
FROM mentas_db.order_details AS od
JOIN mentas_db.products AS p ON od.products_id_product = p.id_product 
JOIN mentas_db.orders AS o ON od.orders_id_order = o.id_order
JOIN mentas_db.order_status AS os ON o.order_status_id_order_status = os.id_order_status
order by orders_id_order;


-- query para traer ordenes dependiendo de su estado
SELECT od.orders_id_order, p.product_name, od.quantity, od.price, os.status
FROM mentas_db.order_details AS od
JOIN mentas_db.products AS p ON od.products_id_product = p.id_product 
JOIN mentas_db.orders AS o ON od.orders_id_order = o.id_order
JOIN mentas_db.order_status AS os ON o.order_status_id_order_status = os.id_order_status
WHERE o.order_status_id_order_status = 1
order by orders_id_order;

-- trae todo el historial de ordenes con su status
select o.id_order, o.users_id_user, o.order_date, o.total, os.status 
from mentas_db.orders as o
join mentas_db.order_status as os ON o.order_status_id_order_status = os.id_order_status;

-- query para traer el total de una orden
SELECT * from mentas_db.orders


