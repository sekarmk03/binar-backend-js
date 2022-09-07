CREATE TABLE customers(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT
);
CREATE TABLE products(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    descrtiption TEXT,
    stock INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE transactions(
    id BIGSERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    qty INTEGER NOT NULL
);

INSERT INTO customers (name, address) VALUES ('Budi', 'Jakarta');
INSERT INTO customers (name, address) VALUES ('Joko', 'Jogja');

INSERT INTO products (name, descrtiption, stock) VALUES ('Beng-Beng', 'coklat', 150);
INSERT INTO products (name, descrtiption, stock) VALUES ('Kalpa', 'biscuit', 150);

CREATE OR REPLACE PROCEDURE buy(
    customer_id INTEGER,
    product_id INTEGER,
    qty INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN
INSERT INTO transactions(product_id, customer_id, qty) values (product_id, customer_id, qty);
UPDATE products SET stock = stock - qty WHERE id = product_id;
COMMIT;
END $$;

CREATE OR REPLACE PROCEDURE restock(
    product_id INTEGER,
    qty INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN
UPDATE products SET stock = stock + qty WHERE id = product_id;
COMMIT; 
END; $$;