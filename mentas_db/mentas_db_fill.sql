USE mentas_db;
INSERT into roles(admin)
VALUES(1),(0);

INSERT INTO `mentas_db`.`clients`
(
`first_name`,
`last_name`,
`email`,
`phone_number`,
`password`)
VALUES ('John','Doe', 'john.doe@example.com', 994653241,'1234'),
('Jane', 'Smith', 'jane.smith@example.com', 9876543210,'1234'),
('Alice', 'Johnson', 'alice.johnson@example.com', 5551112233, '1234'),
('Bob', 'Anderson', 'bob.anderson@example.com', 8887774444,'1234'),
('Eva', 'Rodriguez', 'eva.rodriguez@example.com', 1112223333,'1234');


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





