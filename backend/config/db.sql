CREATE DATABASE administrador_dinero;
USE administrador_dinero;


CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    tipo ENUM('ingresos','gastos') NOT NULL
);



CREATE TABLE movimientos (
    id_movimiento INT AUTO_INCREMENT PRIMARY KEY,
    monto DECIMAL(10,2) NOT NULL,
    fecha DATE NOT NULL,
    id_categoria INT NOT NULL,

    CONSTRAINT fk_categoria
        FOREIGN KEY (id_categoria)
        REFERENCES categorias(id_categoria)
);


INSERT INTO categorias (nombre, tipo) VALUES
('Comida','gastos'),
('Arriendo','gastos'),
('Transporte','gastos'),
('Entretenimiento','gastos'),
('Ingreso','ingresos'),
('Otro','gastos'<);



INSERT INTO movimientos (monto, fecha, id_categoria) VALUES
(2500000.00,'2026-07-01',5),
(45000.00,'2026-07-02',1),
(950000.00,'2026-07-03',2),
(18000.00,'2026-07-04',3),
(70000.00,'2026-07-05',4),
(25000.00,'2026-07-06',6);


SELECT
    m.id_movimiento,
    c.nombre AS categoria,
    c.tipo,
    m.monto,
    m.fecha
FROM movimientos m
INNER JOIN categorias c
ON m.id_categoria = c.id_categoria
ORDER BY m.fecha DESC;



SELECT
    SUM(m.monto) AS total_ingresos
FROM movimientos m
INNER JOIN categorias c
ON m.id_categoria = c.id_categoria
WHERE c.tipo='ingresos';



SELECT
    SUM(m.monto) AS total_gastos
FROM movimientos m
INNER JOIN categorias c
ON m.id_categoria = c.id_categoria
WHERE c.tipo='gastos';

SELECT
    SUM(CASE
            WHEN c.tipo='ingresos' THEN m.monto
            ELSE 0
        END)
    -
    SUM(CASE
            WHEN c.tipo='gastos' THEN m.monto
            ELSE 0
        END) AS balance
FROM movimientos m
INNER JOIN categorias c
ON m.id_categoria = c.id_categoria;