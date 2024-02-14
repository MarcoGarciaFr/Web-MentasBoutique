USE mentas_db;
INSERT into roles(admin)
VALUES(1),(0);

INSERT INTO `mentas_db`.`users`
(
`first_name`,
`last_name`,
`email`,
`phone_number`,
`password`,
`roles_id_roles`)
VALUES ('John','Doe', 'john.doe@example.com', 994653241,'1234', 2),
('Jane', 'Smith', 'jane.smith@example.com', 9876543210,'1234', 2),
('Alice', 'Johnson', 'alice.johnson@example.com', 5551112233, '1234', 2),
('Bob', 'Anderson', 'bob.anderson@example.com', 8887774444,'1234', 2),
('Eva', 'Rodriguez', 'eva.rodriguez@example.com', 1112223333,'1234', 2);

INSERT INTO `mentas_db`.`order_status`
(`status`)
VALUES
('pending'),('approved'),('processing'),('shipped');

INSERT INTO mentas_db.categories(category_name)
VALUES('Mascotas'), ('Profesiones'),('Handmade'),('Otros');

INSERT INTO mentas_db.subcategories(categories_id_category,subcategory_name)
VALUES(1,'Perros'),(1,'Gatos'),(2,'Salud'),(2,'Medicina'),(2,'Psicologia'),(2,'Educacion'),(2,'Quimica'),(2,'Biologia'),(2,'Ciencias'),(3,'Arte');


INSERT INTO mentas_db.products(product_name,price,description,material,type,url_img,stock,categories_id_category)
VALUES ('French Poodle', 390, '', 'Plata 925', 'Charm','', 10,1),
('Cerebro Anatomico', 390, '', 'Plata 925', 'Charm','', 10,2),
('Pulmon Anatomico', 370, '', 'Plata 925', 'Charm','', 10,2),
('Charm Maestra', 370, '', 'Plata 925', 'Charm','', 10,2),
('Charm Microscopio', 370, '', 'Plata 925', 'Charm','', 10,2),
('Schnauzer', 390, '', 'Plata 925', 'Charm','', 10,1);

-- insertar subcategoria al producto
INSERT INTO mentas_db.product_category_details(products_id_producto,subcategories_id_subcategory)
VALUES (1,1),(2,3),(2,4),(2,5),(3,3),(3,4),(4,6),(4,5),(5,3),(5,7),(5,8),(5,9),(6,1);

INSERT INTO `mentas_db`.`orders`
(`users_id_user`,
`order_date`,
`order_status_id_order_status`)
VALUES ( 1, '2024-02-02', 1),
( 2, '2024-02-03', 2),
( 3, '2024-02-04', 1),
( 4, '2024-02-05', 2),
( 5, '2024-02-06', 4);


INSERT INTO `mentas_db`.`order_details`
(`orders_id_order`,
`products_id_product`,
`quantity`)
VALUES
(1,1,2),(2,3,1),(2,2,1),(3,5,1),(3,4,1),(4,6,1),(5,1,1),(5,6,1);


INSERT INTO `mentas_db`.`shopping_cart`
(
`users_id_user`)
VALUES
(1),(2),(3),(4),(5);

INSERT INTO `mentas_db`.`shopping_cart_details`
(`shopping_cart_id_shopping_cart`,
`products_id_product`,
`quantity`)
VALUES
(1,1,1),(1,6,1),(2,5,1),(3,4,2),(4,1,1),(4,2,1),(4,5,1),(5,2,1);

UPDATE `mentas_db`.`shopping_cart_details`
SET quantity = 2
WHERE shopping_cart_id_shopping_cart = 1 AND products_id_product = 1;





