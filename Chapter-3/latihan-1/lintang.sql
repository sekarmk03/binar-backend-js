CREATE TABLE customers (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT
);

CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    stock INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE transactions (
    id BIGSERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INTEGER NOT NULL
);

INSERT INTO customers (name,address) values ('lintang', 'purwokerto');
INSERT INTO customers (name,address) values ('dandung', 'banyumas');

INSERT INTO products (name,stock) values ('hp', 10);
INSERT INTO products (name,stock) values ('laptop', 10);

-- transaction procedure
CREATE OR REPLACE PROCEDURE buy (
    customerId INTEGER,
    productId INTEGER,
    qty INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Record transaction
    INSERT INTO transactions (customer_id, product_id, quantity) values ('customerId', 'productId', 1);

    -- update stock
    UPDATE products
    SET
        stock = stock - qty
    WHERE
        id = productId;
    COMMIT;
END; $$;


-- update stock procedure
CREATE OR REPLACE PROCEDURE restock (
    productId INTEGER,
    qty INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- update stock
    UPDATE products
    SET
        stock = stock + qty
    WHERE
        id = productId;
    COMMIT;
END; $$;
