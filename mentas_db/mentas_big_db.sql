-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mentas_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mentas_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mentas_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mentas_db` ;

-- -----------------------------------------------------
-- Table `mentas_db`.`order_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`order_status` (
  `id_order_status` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_order_status`),
  UNIQUE INDEX `id_order_status_UNIQUE` (`id_order_status` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`roles` (
  `id_roles` INT NOT NULL AUTO_INCREMENT,
  `admin` TINYINT NOT NULL,
  PRIMARY KEY (`id_roles`),
  UNIQUE INDEX `id_roles_UNIQUE` (`id_roles` ASC) VISIBLE,
  UNIQUE INDEX `admin_UNIQUE` (`admin` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mentas_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `roles_id_roles` INT NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `id_user_UNIQUE` (`id_user` ASC) VISIBLE,
  INDEX `fk_users_roles1_idx` (`roles_id_roles` ASC) VISIBLE,
  CONSTRAINT `fk_users_roles1`
    FOREIGN KEY (`roles_id_roles`)
    REFERENCES `mentas_db`.`roles` (`id_roles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`orders` (
  `id_order` INT NOT NULL AUTO_INCREMENT,
  `users_id_user` INT NOT NULL,
  `order_date` DATE NOT NULL,
  `total` DECIMAL(10,2) NOT NULL DEFAULT 0,
  `order_status_id_order_status` INT NOT NULL,
  PRIMARY KEY (`id_order`),
  INDEX `fk_orders_order_status1_idx` (`order_status_id_order_status` ASC) VISIBLE,
  UNIQUE INDEX `id_order_UNIQUE` (`id_order` ASC) VISIBLE,
  INDEX `fk_orders_users1_idx` (`users_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_orders_order_status1`
    FOREIGN KEY (`order_status_id_order_status`)
    REFERENCES `mentas_db`.`order_status` (`id_order_status`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_users1`
    FOREIGN KEY (`users_id_user`)
    REFERENCES `mentas_db`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mentas_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`categories` (
  `id_category` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_category`),
  UNIQUE INDEX `id_category_UNIQUE` (`id_category` ASC) VISIBLE,
  UNIQUE INDEX `category_name_UNIQUE` (`category_name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`products` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `material` VARCHAR(50) NOT NULL,
  `type` VARCHAR(50) NOT NULL,
  `url_img` VARCHAR(255) NOT NULL,
  `stock` INT NOT NULL,
  `categories_id_category` INT NOT NULL,
  PRIMARY KEY (`id_product`),
  INDEX `fk_products_categories1_idx` (`categories_id_category` ASC) VISIBLE,
  UNIQUE INDEX `id_product_UNIQUE` (`id_product` ASC) VISIBLE,
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_id_category`)
    REFERENCES `mentas_db`.`categories` (`id_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mentas_db`.`order_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`order_details` (
  `orders_id_order` INT NOT NULL,
  `products_id_product` INT NOT NULL,
  `quantity` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`orders_id_order`, `products_id_product`),
  INDEX `fk_order_details_products1_idx` (`products_id_product` ASC) VISIBLE,
  CONSTRAINT `fk_order_details_orders1`
    FOREIGN KEY (`orders_id_order`)
    REFERENCES `mentas_db`.`orders` (`id_order`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_details_products1`
    FOREIGN KEY (`products_id_product`)
    REFERENCES `mentas_db`.`products` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mentas_db`.`subcategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`subcategories` (
  `id_subcategory` INT NOT NULL AUTO_INCREMENT,
  `categories_id_category` INT NOT NULL,
  `subcategory_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_subcategory`),
  INDEX `fk_subcategories_categories1_idx` (`categories_id_category` ASC) VISIBLE,
  UNIQUE INDEX `subcategory_name_UNIQUE` (`subcategory_name` ASC) VISIBLE,
  UNIQUE INDEX `id_subcategory_UNIQUE` (`id_subcategory` ASC) VISIBLE,
  CONSTRAINT `fk_subcategories_categories1`
    FOREIGN KEY (`categories_id_category`)
    REFERENCES `mentas_db`.`categories` (`id_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`product_category_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`product_category_details` (
  `products_id_producto` INT NOT NULL,
  `subcategories_id_subcategory` INT NOT NULL,
  PRIMARY KEY (`products_id_producto`, `subcategories_id_subcategory`),
  INDEX `fk_product_category_details_products1_idx` (`products_id_producto` ASC) VISIBLE,
  INDEX `fk_product_category_details_subcategories1_idx` (`subcategories_id_subcategory` ASC) VISIBLE,
  CONSTRAINT `fk_product_category_details_products1`
    FOREIGN KEY (`products_id_producto`)
    REFERENCES `mentas_db`.`products` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_category_details_subcategories1`
    FOREIGN KEY (`subcategories_id_subcategory`)
    REFERENCES `mentas_db`.`subcategories` (`id_subcategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`shopping_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`shopping_cart` (
  `id_shopping_cart` INT NOT NULL AUTO_INCREMENT,
  `users_id_user` INT NOT NULL,
  PRIMARY KEY (`id_shopping_cart`),
  UNIQUE INDEX `id_shopping_cart_UNIQUE` (`id_shopping_cart` ASC) VISIBLE,
  INDEX `fk_shopping_cart_users1_idx` (`users_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_shopping_cart_users1`
    FOREIGN KEY (`users_id_user`)
    REFERENCES `mentas_db`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`shopping_cart_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`shopping_cart_details` (
  `shopping_cart_id_shopping_cart` INT NOT NULL,
  `products_id_product` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`shopping_cart_id_shopping_cart`, `products_id_product`),
  INDEX `fk_shopping_cart_details_shopping_cart1_idx` (`shopping_cart_id_shopping_cart` ASC) VISIBLE,
  INDEX `fk_shopping_cart_details_products1_idx` (`products_id_product` ASC) VISIBLE,
  CONSTRAINT `fk_shopping_cart_details_shopping_cart1`
    FOREIGN KEY (`shopping_cart_id_shopping_cart`)
    REFERENCES `mentas_db`.`shopping_cart` (`id_shopping_cart`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_shopping_cart_details_products1`
    FOREIGN KEY (`products_id_product`)
    REFERENCES `mentas_db`.`products` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`address` (
  `id_address` INT NOT NULL AUTO_INCREMENT,
  `unit_number` VARCHAR(45) NOT NULL,
  `street` VARCHAR(45) NOT NULL,
  `address_line1` VARCHAR(100) NOT NULL,
  `address_line2` VARCHAR(100) NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `postal_code` VARCHAR(6) NOT NULL,
  PRIMARY KEY (`id_address`),
  UNIQUE INDEX `id_address_UNIQUE` (`id_address` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`user_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`user_address` (
  `address_id_address` INT NOT NULL,
  `users_id_user` INT NOT NULL,
  `is_default` TINYINT NOT NULL,
  PRIMARY KEY (`address_id_address`, `users_id_user`),
  INDEX `fk_address_has_user_address1_idx` (`address_id_address` ASC) VISIBLE,
  INDEX `fk_user_address_users1_idx` (`users_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_address_has_user_address1`
    FOREIGN KEY (`address_id_address`)
    REFERENCES `mentas_db`.`address` (`id_address`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_address_users1`
    FOREIGN KEY (`users_id_user`)
    REFERENCES `mentas_db`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`shipping_method`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`shipping_method` (
  `id_shipping_method` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_shipping_method`),
  UNIQUE INDEX `id_shipping_method_UNIQUE` (`id_shipping_method` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`shipping`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`shipping` (
  `id_shipping` INT NOT NULL AUTO_INCREMENT,
  `shipping_method_id_shipping_method` INT NOT NULL,
  `address_id_address` INT NOT NULL,
  `shipping_date` DATE NOT NULL,
  `trakcking_number` VARCHAR(45) NULL,
  `orders_id_order` INT NOT NULL,
  PRIMARY KEY (`id_shipping`),
  INDEX `fk_shipping_shipping_method1_idx` (`shipping_method_id_shipping_method` ASC) VISIBLE,
  INDEX `fk_shipping_address1_idx` (`address_id_address` ASC) VISIBLE,
  INDEX `fk_shipping_orders1_idx` (`orders_id_order` ASC) VISIBLE,
  UNIQUE INDEX `id_shipping_UNIQUE` (`id_shipping` ASC) VISIBLE,
  CONSTRAINT `fk_shipping_shipping_method1`
    FOREIGN KEY (`shipping_method_id_shipping_method`)
    REFERENCES `mentas_db`.`shipping_method` (`id_shipping_method`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_shipping_address1`
    FOREIGN KEY (`address_id_address`)
    REFERENCES `mentas_db`.`address` (`id_address`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_shipping_orders1`
    FOREIGN KEY (`orders_id_order`)
    REFERENCES `mentas_db`.`orders` (`id_order`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`payment_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`payment_type` (
  `id_payment_type` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_payment_type`),
  UNIQUE INDEX `id_payment_type_UNIQUE` (`id_payment_type` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`user_payment_method`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`user_payment_method` (
  `id_payment_method` INT NOT NULL,
  `users_id_user` INT NOT NULL,
  `payment_type_id_payment_type` INT NOT NULL,
  `is_default` TINYINT NOT NULL,
  PRIMARY KEY (`id_payment_method`),
  INDEX `fk_payment_method_payment_type1_idx` (`payment_type_id_payment_type` ASC) VISIBLE,
  UNIQUE INDEX `id_payment_method_UNIQUE` (`id_payment_method` ASC) VISIBLE,
  INDEX `fk_user_payment_method_users1_idx` (`users_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_payment_method_payment_type1`
    FOREIGN KEY (`payment_type_id_payment_type`)
    REFERENCES `mentas_db`.`payment_type` (`id_payment_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_payment_method_users1`
    FOREIGN KEY (`users_id_user`)
    REFERENCES `mentas_db`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
