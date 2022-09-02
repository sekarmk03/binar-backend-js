PGDMP                         z         
   toko_bejs1    14.5    14.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16437 
   toko_bejs1    DATABASE     j   CREATE DATABASE toko_bejs1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Indonesia.1252';
    DROP DATABASE toko_bejs1;
                postgres    false            �            1255    16464    stock(integer, integer) 	   PROCEDURE     �   CREATE PROCEDURE public.stock(IN product_id integer, IN qty integer)
    LANGUAGE plpgsql
    AS $$
begin
update products set stock = stock + qty where id = product_id;
commit;
end;$$;
 D   DROP PROCEDURE public.stock(IN product_id integer, IN qty integer);
       public          postgres    false            �            1255    16463 &   transaction(integer, integer, integer) 	   PROCEDURE     �   CREATE PROCEDURE public.transaction(IN customer_id integer, IN product_id integer, IN qty integer)
    LANGUAGE plpgsql
    AS $$
begin
update products set stock = stock - qty where id = product_id;
commit;
end;$$;
 b   DROP PROCEDURE public.transaction(IN customer_id integer, IN product_id integer, IN qty integer);
       public          postgres    false            �            1259    16448 	   customers    TABLE        CREATE TABLE public.customers (
    id bigint NOT NULL,
    name character varying(255),
    address character varying(255)
);
    DROP TABLE public.customers;
       public         heap    postgres    false            �            1259    16447    customers_id_seq    SEQUENCE     y   CREATE SEQUENCE public.customers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.customers_id_seq;
       public          postgres    false    212                       0    0    customers_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;
          public          postgres    false    211            �            1259    16439    products    TABLE     �   CREATE TABLE public.products (
    id bigint NOT NULL,
    name character varying(255),
    deskripsi character varying(255),
    stock integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16438    products_id_seq    SEQUENCE     x   CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    210            	           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    209            �            1259    16457    transaction    TABLE     �   CREATE TABLE public.transaction (
    id bigint NOT NULL,
    product_id integer NOT NULL,
    customer_id integer NOT NULL,
    qty integer NOT NULL
);
    DROP TABLE public.transaction;
       public         heap    postgres    false            �            1259    16456    transaction_id_seq    SEQUENCE     {   CREATE SEQUENCE public.transaction_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.transaction_id_seq;
       public          postgres    false    214            
           0    0    transaction_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.transaction_id_seq OWNED BY public.transaction.id;
          public          postgres    false    213            i           2604    16451    customers id    DEFAULT     l   ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);
 ;   ALTER TABLE public.customers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            h           2604    16442    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            j           2604    16460    transaction id    DEFAULT     p   ALTER TABLE ONLY public.transaction ALTER COLUMN id SET DEFAULT nextval('public.transaction_id_seq'::regclass);
 =   ALTER TABLE public.transaction ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            �          0    16448 	   customers 
   TABLE DATA           6   COPY public.customers (id, name, address) FROM stdin;
    public          postgres    false    212   �       �          0    16439    products 
   TABLE DATA           >   COPY public.products (id, name, deskripsi, stock) FROM stdin;
    public          postgres    false    210   �                 0    16457    transaction 
   TABLE DATA           G   COPY public.transaction (id, product_id, customer_id, qty) FROM stdin;
    public          postgres    false    214   :                  0    0    customers_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.customers_id_seq', 1, false);
          public          postgres    false    211                       0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 1, false);
          public          postgres    false    209                       0    0    transaction_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.transaction_id_seq', 1, false);
          public          postgres    false    213            n           2606    16455    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    212            l           2606    16446    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    210            p           2606    16462    transaction transaction_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.transaction DROP CONSTRAINT transaction_pkey;
       public            postgres    false    214            �      x�3�������MMI������ .�j      �   /   x�3��I,(�/�R
�ť�
�y%��
���ř�剜�\1z\\\ _�1            x������ � �     