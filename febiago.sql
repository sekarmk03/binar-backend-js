CREATE TABLE users (
  id bigserial PRIMARY KEY, 
  name varchar(50), 
  email varchar(50),
  password varchar(20)
);

CREATE TABLE channels (
  id bigserial PRIMARY KEY, 
  user_id integer, 
  name varchar(50), 
  description text
);


ALTER TABLE public.comments OWNER TO gricowijaya;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: gricowijaya
--

CREATE SEQUENCE public.comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO gricowijaya;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gricowijaya
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: gricowijaya
--

CREATE TABLE public.likes (
    id bigint NOT NULL,
    video_id integer,
    user_id integer
);

CREATE TABLE videos (
  id bigserial PRIMARY KEY, 
  title varchar(100),
  description text,
  channel_id integer
);


ALTER TABLE public.subscribers OWNER TO gricowijaya;

--
-- Name: subscribers_id_seq; Type: SEQUENCE; Schema: public; Owner: gricowijaya
--

CREATE SEQUENCE public.subscribers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subscribers_id_seq OWNER TO gricowijaya;

--
-- Name: subscribers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gricowijaya
--

ALTER SEQUENCE public.subscribers_id_seq OWNED BY public.subscribers.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: gricowijaya
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(30),
    email character varying(30),
    password character varying(15)
);


ALTER TABLE public.users OWNER TO gricowijaya;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: gricowijaya
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO gricowijaya;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gricowijaya
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: videos; Type: TABLE; Schema: public; Owner: gricowijaya
--

CREATE TABLE public.videos (
    id bigint NOT NULL,
    title character varying(50),
    description text,
    channel_id integer
);

