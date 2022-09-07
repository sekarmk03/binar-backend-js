--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: restock(integer, integer); Type: PROCEDURE; Schema: public; Owner: gricowijaya
--

CREATE PROCEDURE public.restock(IN product_id integer, IN qty integer)
    LANGUAGE plpgsql
    AS $$
BEGIN

  UPDATE products 
  SET stock = stock + qty
  WHERE id = product_id;

  COMMIT;
END;$$;


ALTER PROCEDURE public.restock(IN product_id integer, IN qty integer) OWNER TO gricowijaya;

--
-- Name: transaction(integer, integer, integer); Type: PROCEDURE; Schema: public; Owner: gricowijaya
--

CREATE PROCEDURE public.transaction(IN customer_id integer, IN product_id integer, IN qty integer)
    LANGUAGE plpgsql
    AS $$
BEGIN
  INSERT INTO transactions 
  (customer_id, product_id, qty)
  VALUES
  (customer_id, product_id, qty);

  UPDATE products 
  SET stock = stock - qty
  WHERE id = product_id;

  COMMIT;
END;$$;


ALTER PROCEDURE public.transaction(IN customer_id integer, IN product_id integer, IN qty integer) OWNER TO gricowijaya;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: customers; Type: TABLE; Schema: public; Owner: gricowijaya
--

CREATE TABLE public.customers (
    id bigint NOT NULL,
    name character varying(25) NOT NULL,
    address text
);


ALTER TABLE public.customers OWNER TO gricowijaya;

--
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: gricowijaya
--

CREATE SEQUENCE public.customers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_id_seq OWNER TO gricowijaya;

--
-- Name: customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gricowijaya
--

ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: gricowijaya
--

CREATE TABLE public.products (
    id bigint NOT NULL,
    name character varying(25) NOT NULL,
    description text,
    stock integer
);


ALTER TABLE public.products OWNER TO gricowijaya;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: gricowijaya
--

CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO gricowijaya;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gricowijaya
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: transactions; Type: TABLE; Schema: public; Owner: gricowijaya
--

CREATE TABLE public.transactions (
    id bigint NOT NULL,
    product_id integer,
    customer_id integer,
    qty integer
);


ALTER TABLE public.transactions OWNER TO gricowijaya;

--
-- Name: transactions_id_seq; Type: SEQUENCE; Schema: public; Owner: gricowijaya
--

CREATE SEQUENCE public.transactions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transactions_id_seq OWNER TO gricowijaya;

--
-- Name: transactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gricowijaya
--

ALTER SEQUENCE public.transactions_id_seq OWNED BY public.transactions.id;


--
-- Name: customers id; Type: DEFAULT; Schema: public; Owner: gricowijaya
--

ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: gricowijaya
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: transactions id; Type: DEFAULT; Schema: public; Owner: gricowijaya
--

ALTER TABLE ONLY public.transactions ALTER COLUMN id SET DEFAULT nextval('public.transactions_id_seq'::regclass);


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: gricowijaya
--

COPY public.customers (id, name, address) FROM stdin;
1	Dedens Setyawan	Gianyar, Celuk, Bali
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: gricowijaya
--

COPY public.products (id, name, description, stock) FROM stdin;
1	Thinkpad X1 Nano	Baru Banget Mari Dibeli	1
\.


--
-- Data for Name: transactions; Type: TABLE DATA; Schema: public; Owner: gricowijaya
--

COPY public.transactions (id, product_id, customer_id, qty) FROM stdin;
1	1	1	4
\.


--
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gricowijaya
--

SELECT pg_catalog.setval('public.customers_id_seq', 1, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gricowijaya
--

SELECT pg_catalog.setval('public.products_id_seq', 1, true);


--
-- Name: transactions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gricowijaya
--

SELECT pg_catalog.setval('public.transactions_id_seq', 1, true);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: gricowijaya
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: gricowijaya
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: gricowijaya
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (id);


--
-- Name: transactions transactions_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gricowijaya
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);


--
-- Name: transactions transactions_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gricowijaya
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- PostgreSQL database dump complete
--

