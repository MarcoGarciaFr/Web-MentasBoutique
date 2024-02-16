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
-- Table `mentas_db`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`roles` (
  `id_roles` BIGINT NOT NULL AUTO_INCREMENT,
  `admin` TINYINT NOT NULL,
  PRIMARY KEY (`id_roles`),
  UNIQUE INDEX `id_roles_UNIQUE` (`id_roles` ASC) VISIBLE,
  UNIQUE INDEX `admin_UNIQUE` (`admin` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mentas_db`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`user` (
  `id_user` BIGINT NOT NULL auto_increment,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `roles_id_roles` BIGINT NOT NULL default 2,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `id_user_UNIQUE` (`id_user` ASC) VISIBLE,
  INDEX `fk_user_roles1_idx` (`roles_id_roles` ASC) VISIBLE,
  CONSTRAINT `fk_user_roles1`
    FOREIGN KEY (`roles_id_roles`)
    REFERENCES `mentas_db`.`roles` (`id_roles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`orders` (
  `id_order` BIGINT NOT NULL AUTO_INCREMENT,
  `order_date` DATE NOT NULL,
  `total` DECIMAL(10,2) NOT NULL,
  `user_id_user` BIGINT NOT NULL,
  PRIMARY KEY (`id_order`),
  UNIQUE INDEX `id_order_UNIQUE` (`id_order` ASC) VISIBLE,
  INDEX `fk_orders_user1_idx` (`user_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_orders_user1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `mentas_db`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mentas_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`products` (
  `id_product` BIGINT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `material` VARCHAR(50) NOT NULL,
  `type` VARCHAR(50) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `url_img` VARCHAR(255) NOT NULL,
  `stock` INT NOT NULL,
  PRIMARY KEY (`id_product`),
  UNIQUE INDEX `id_product_UNIQUE` (`id_product` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mentas_db`.`order_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`order_details` (
  `quantity` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `orders_id_order` BIGINT NOT NULL,
  `products_id_product` BIGINT NOT NULL,
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
-- Table `mentas_db`.`shopping_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`shopping_cart` (
  `id_shopping_cart` BIGINT NOT NULL AUTO_INCREMENT,
  `user_id_user` BIGINT NOT NULL,
  PRIMARY KEY (`id_shopping_cart`),
  UNIQUE INDEX `id_shopping_cart_UNIQUE` (`id_shopping_cart` ASC) VISIBLE,
  INDEX `fk_shopping_cart_user1_idx` (`user_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_shopping_cart_user1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `mentas_db`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`shopping_cart_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`shopping_cart_details` (
  `quantity` INT NOT NULL,
  `shopping_cart_id_shopping_cart` BIGINT NOT NULL,
  `products_id_product` BIGINT NOT NULL,
  PRIMARY KEY (`shopping_cart_id_shopping_cart`, `products_id_product`),
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
  `id_address` BIGINT NOT NULL AUTO_INCREMENT,
  `unit_number` VARCHAR(45) NOT NULL,
  `street` VARCHAR(45) NOT NULL,
  `address_line1` VARCHAR(100) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `postal_code` VARCHAR(6) NOT NULL,
  PRIMARY KEY (`id_address`),
  UNIQUE INDEX `id_address_UNIQUE` (`id_address` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mentas_db`.`shipping`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentas_db`.`shipping` (
  `id_shipping` BIGINT NOT NULL AUTO_INCREMENT,
  `shipping_date` DATE NOT NULL,
  `tracking_number` VARCHAR(45) NULL,
  `address_id_address` BIGINT NOT NULL,
  `orders_id_order` BIGINT NOT NULL,
  `price` BIGINT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_shipping`),
  UNIQUE INDEX `id_shipping_UNIQUE` (`id_shipping` ASC) VISIBLE,
  INDEX `fk_shipping_address1_idx` (`address_id_address` ASC) VISIBLE,
  INDEX `fk_shipping_orders1_idx` (`orders_id_order` ASC) VISIBLE,
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


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
