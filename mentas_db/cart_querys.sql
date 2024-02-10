-- traer productos de determinado carrito

SELECT
    scd.shopping_cart_id_shopping_cart, u.id_user AS id_user,
    p.product_name AS product, scd.quantity,
    scd.quantity * p.price AS subtotal
FROM
    mentas_db.shopping_cart_details AS scd
JOIN
    mentas_db.products AS p ON scd.products_id_product = p.id_product
JOIN
	mentas_db.shopping_cart AS sc ON scd.shopping_cart_id_shopping_cart = sc.id_shopping_cart
JOIN
	mentas_db.users AS u ON sc.users_id_user = u.id_user
WHERE
    scd.shopping_cart_id_shopping_cart = 1;
    
   
-- Calcular el subtotal de los articulos en el carrito
SELECT
    scd.shopping_cart_id_shopping_cart, u.id_user AS id_user,
    SUM(scd.quantity * p.price) AS cart_subtotal
FROM
    mentas_db.shopping_cart_details AS scd
JOIN
    mentas_db.products AS p ON scd.products_id_product = p.id_product
JOIN
	mentas_db.shopping_cart AS sc ON scd.shopping_cart_id_shopping_cart = sc.id_shopping_cart
JOIN
	mentas_db.users AS u ON sc.users_id_user = u.id_user
WHERE
    scd.shopping_cart_id_shopping_cart = 3;
    
    select * from mentas_db.shopping_cart_details