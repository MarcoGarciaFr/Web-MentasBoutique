-- query para traer las subcategorias de determinado producto
SELECT 
subc.subcategory_name as product_subcategories
FROM mentas_db.products AS p
JOIN mentas_db.categories AS cat ON p.categories_id_category = cat.id_category
JOIN mentas_db.product_category_details AS pcd ON p.id_product = pcd.products_id_producto
JOIN mentas_db.subcategories AS subc ON pcd.subcategories_id_subcategory = subc.id_subcategory
WHERE p.id_product = 4;

-- query para traer la info completa de los productos, a excepcion de las subcategorias.
SELECT p.id_product, p.product_name, p.price, p.description, p.material, p.type,p.url_img, p.stock, c.category_name
FROM mentas_db.products as p
JOIN mentas_db.categories AS c ON p.categories_id_category = c.id_category;




