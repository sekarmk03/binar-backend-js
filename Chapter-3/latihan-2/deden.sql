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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: channels; Type: TABLE; Schema: public; Owner: yandens
--

CREATE TABLE public.channels (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    name character varying(255),
    description text NOT NULL
);


ALTER TABLE public.channels OWNER TO yandens;

--
-- Name: channels_id_seq; Type: SEQUENCE; Schema: public; Owner: yandens
--

CREATE SEQUENCE public.channels_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.channels_id_seq OWNER TO yandens;

--
-- Name: channels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yandens
--

ALTER SEQUENCE public.channels_id_seq OWNED BY public.channels.id;


--
-- Name: comments; Type: TABLE; Schema: public; Owner: yandens
--

CREATE TABLE public.comments (
    id bigint NOT NULL,
    video_id integer,
    user_id integer,
    comment text
);


ALTER TABLE public.comments OWNER TO yandens;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: yandens
--

CREATE SEQUENCE public.comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO yandens;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yandens
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: yandens
--

CREATE TABLE public.likes (
    id bigint NOT NULL,
    user_id integer,
    video_id integer
);


ALTER TABLE public.likes OWNER TO yandens;

--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: yandens
--

CREATE SEQUENCE public.likes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.likes_id_seq OWNER TO yandens;

--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yandens
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: subscribers; Type: TABLE; Schema: public; Owner: yandens
--

CREATE TABLE public.subscribers (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    channel_id integer NOT NULL
);


ALTER TABLE public.subscribers OWNER TO yandens;

--
-- Name: subscribers_id_seq; Type: SEQUENCE; Schema: public; Owner: yandens
--

CREATE SEQUENCE public.subscribers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subscribers_id_seq OWNER TO yandens;

--
-- Name: subscribers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yandens
--

ALTER SEQUENCE public.subscribers_id_seq OWNED BY public.subscribers.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: yandens
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO yandens;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: yandens
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO yandens;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yandens
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: videos; Type: TABLE; Schema: public; Owner: yandens
--

CREATE TABLE public.videos (
    id bigint NOT NULL,
    channel_id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL
);


ALTER TABLE public.videos OWNER TO yandens;

--
-- Name: videos_id_seq; Type: SEQUENCE; Schema: public; Owner: yandens
--

CREATE SEQUENCE public.videos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.videos_id_seq OWNER TO yandens;

--
-- Name: videos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yandens
--

ALTER SEQUENCE public.videos_id_seq OWNED BY public.videos.id;


--
-- Name: channels id; Type: DEFAULT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.channels ALTER COLUMN id SET DEFAULT nextval('public.channels_id_seq'::regclass);


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: subscribers id; Type: DEFAULT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.subscribers ALTER COLUMN id SET DEFAULT nextval('public.subscribers_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: videos id; Type: DEFAULT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.videos ALTER COLUMN id SET DEFAULT nextval('public.videos_id_seq'::regclass);


--
-- Data for Name: channels; Type: TABLE DATA; Schema: public; Owner: yandens
--

COPY public.channels (id, user_id, name, description) FROM stdin;
\.


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: yandens
--

COPY public.comments (id, video_id, user_id, comment) FROM stdin;
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: yandens
--

COPY public.likes (id, user_id, video_id) FROM stdin;
\.


--
-- Data for Name: subscribers; Type: TABLE DATA; Schema: public; Owner: yandens
--

COPY public.subscribers (id, user_id, channel_id) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: yandens
--

COPY public.users (id, name, email, password) FROM stdin;
\.


--
-- Data for Name: videos; Type: TABLE DATA; Schema: public; Owner: yandens
--

COPY public.videos (id, channel_id, title, description) FROM stdin;
\.


--
-- Name: channels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yandens
--

SELECT pg_catalog.setval('public.channels_id_seq', 1, false);


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yandens
--

SELECT pg_catalog.setval('public.comments_id_seq', 1, false);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yandens
--

SELECT pg_catalog.setval('public.likes_id_seq', 1, false);


--
-- Name: subscribers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yandens
--

SELECT pg_catalog.setval('public.subscribers_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yandens
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: videos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yandens
--

SELECT pg_catalog.setval('public.videos_id_seq', 1, false);


--
-- Name: channels channels_pkey; Type: CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.channels
    ADD CONSTRAINT channels_pkey PRIMARY KEY (id);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: subscribers subscribers_pkey; Type: CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.subscribers
    ADD CONSTRAINT subscribers_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: videos videos_pkey; Type: CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.videos
    ADD CONSTRAINT videos_pkey PRIMARY KEY (id);


--
-- Name: channels channels_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.channels
    ADD CONSTRAINT channels_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: comments comments_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: comments comments_video_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_video_id_fkey FOREIGN KEY (video_id) REFERENCES public.videos(id);


--
-- Name: likes likes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: likes likes_video_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_video_id_fkey FOREIGN KEY (video_id) REFERENCES public.videos(id);


--
-- Name: subscribers subscribers_channel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.subscribers
    ADD CONSTRAINT subscribers_channel_id_fkey FOREIGN KEY (channel_id) REFERENCES public.channels(id);


--
-- Name: subscribers subscribers_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.subscribers
    ADD CONSTRAINT subscribers_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: videos videos_channel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yandens
--

ALTER TABLE ONLY public.videos
    ADD CONSTRAINT videos_channel_id_fkey FOREIGN KEY (channel_id) REFERENCES public.channels(id);


--
-- PostgreSQL database dump complete
--

