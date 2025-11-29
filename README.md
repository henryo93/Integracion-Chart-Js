## URLS BACKEND

http://localhost:5000/valor-total-product-type
http://localhost:5000/promedio-valor-category
http://localhost:5000/cantidad-productos-status


## URLS FRONTEND

http://localhost:3000/promedioCategoriaProducto
http://localhost:3000/cantidadEstadoProducto
http://localhost:3000/valorTotalTipoProducto

## SENTENCIAS UTILIZADAS

-- 8. Obtener el valor total de los productos por productType
SELECT productType, SUM(value) AS valor_total
FROM producto
GROUP BY productType;

-- 10. Calcular el valor promedio de productos por cada categoryCode
SELECT categoryCode, AVG(value) AS promedio_valor
FROM producto
GROUP BY categoryCode;

-- 11. Contar productos disponibles en cada status
SELECT status, COUNT(*) AS cantidad
FROM producto
GROUP BY status;