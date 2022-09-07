--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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
-- Name: restock(integer, integer); Type: PROCEDURE; Schema: public; Owner: yandens
--

CREATE PROCEDURE public.restock(IN product_id integer, IN qty integer)
    LANGUAGE plpgsql
    AS $$
begin
update products set stock = stock + qty where id = product_id;
commit;
end;$$;


ALTER PROCEDURE public.restock(IN product_id integer, IN qty integer) OWNER TO yandens;

--
-- Name: transaction(integer, integer, integer); Type: PROCEDURE; Schema: public; Owner: yandens
--

CREATE PROCEDURE public.transaction(IN product_id integer, IN costumer_id integer, IN qty integer)
    LANGUAGE plpgsql
    AS $$
begin
insert into transaction (product_id, costumer_id, qty) values (product_id, costumer_id, qty);
update products set stock = stock - qty where id = product_id;
commit;
end;$$;


ALTER PROCEDURE public.transaction(IN product_id integer, IN costumer_id integer, IN qty integer) OWNER TO yandens;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: costumers; Type: TABLE; Schema: public; Owner: yandens
--

CREATE TABLE public.costumers (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    address text NOT NULL
);


ALTER TABLE public.costumers OWNER TO yandens;

--
-- Name: costumers_id_seq; Type: SEQUENCE; Schema: public; Owner: yandens
--

CREATE SEQUENCE public.costumers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.costumers_id_seq OWNER TO yandens;

--
-- Name: costumers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yandens
--

ALTER SEQUENCE public.costumers_id_seq OWNED BY public.costumers.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: yandens
--

CREATE TABLE public.products (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    stock integer NOT NULL
);


ALTER TABLE public.products OWNER TO yandens;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: yandens
--

CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO yandens;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yandens
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: transaction; Type: TABLE; Schema: public; Owner: yandens
--

CREATE TABLE public.transaction (
    id bigint NOT NULL,
    product_id integer NOT NULL,
    costumer_id integer NOT NULL,
    qty integer
);


ALTER TABLE public.transaction OWNER TO yandens;

--
-- Name: transaction_id_seq; Type: SEQUENCE; Schema: public; Owner: yandens
--

CREATE SEQUENCE public.transaction_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transaction_id_seq OWNER TO yandens;

--
-- Name: transaction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yandens
--

ALTER SEQUENCE public.transaction_id_seq OWNED BY public.transaction.id;


--
-- Name: costumers id; Type: DEFAULT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.costumers ALTER COLUMN id SET DEFAULT nextval('public.costumers_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: transaction id; Type: DEFAULT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.transaction ALTER COLUMN id SET DEFAULT nextval('public.transaction_id_seq'::regclass);


--
-- Data for Name: costumers; Type: TABLE DATA; Schema: public; Owner: yandens
--

COPY public.costumers (id, name, address) FROM stdin;
1	deden	gianyar
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: yandens
--

COPY public.products (id, name, description, stock) FROM stdin;
1	roti	roti dari tepung	55
\.


--
-- Data for Name: transaction; Type: TABLE DATA; Schema: public; Owner: yandens
--

COPY public.transaction (id, product_id, costumer_id, qty) FROM stdin;
1	1	1	5
\.


--
-- Name: costumers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yandens
--

SELECT pg_catalog.setval('public.costumers_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yandens
--

SELECT pg_catalog.setval('public.products_id_seq', 1, false);


--
-- Name: transaction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yandens
--

SELECT pg_catalog.setval('public.transaction_id_seq', 1, true);


--
-- Name: costumers costumers_pkey; Type: CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.costumers
    ADD CONSTRAINT costumers_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: transaction transaction_pkey; Type: CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (id);


--
-- Name: transaction transaction_costumer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_costumer_id_fkey FOREIGN KEY (costumer_id) REFERENCES public.costumers(id);


--
-- Name: transaction transaction_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- PostgreSQL database dump complete
--

