CREATE TABLE users (
  id bigserial PRIMARY KEY, 
  name varchar(30), 
  email varchar(30),
  password varchar(15)
);

CREATE TABLE channels (
  id bigserial PRIMARY KEY, 
  user_id integer, 
  name varchar(30), 
  description text
);

CREATE TABLE subscribers (
  id bigserial PRIMARY KEY, 
  channel_id integer, 
  user_id integer 
);

CREATE TABLE videos (
  id bigserial PRIMARY KEY, 
  title varchar(50),
  description text,
  channel_id integer
);

CREATE TABLE comments (
  id bigserial PRIMARY KEY, 
  video_id integer,
  user_id integer,
  comments text
);

CREATE TABLE likes (
  id bigserial PRIMARY KEY, 
  video_id integer,
  user_id integer
);
