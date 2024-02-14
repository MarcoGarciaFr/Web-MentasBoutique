DELIMITER //
CREATE TRIGGER before_insert_orderdetails
BEFORE INSERT ON mentas_db.order_details
FOR EACH ROW
BEGIN
    SET NEW.price = NEW.quantity * (SELECT price FROM mentas_db.products WHERE mentas_db.products.id_product = NEW.products_id_product);
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER after_insert_order_details_update_order
AFTER INSERT ON mentas_db.order_details
FOR EACH ROW
BEGIN
   UPDATE mentas_db.orders
   SET total = (
	SELECT SUM(price)
    FROM mentas_db.order_details
    WHERE orders_id_order = NEW.orders_id_order
    )
    WHERE orders.id_order = NEW.orders_id_order;
END;
//
DELIMITER ;