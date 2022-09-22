CREATE TABLE Users (
  id integer,
  name varchar(50),
  email varchar(50),
  password varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE Channels (
  id integer,
  user_id integer,
  name varchar(50),
  desciption text,
  PRIMARY KEY (id)
);

CREATE TABLE Subscribers (
  id integer,
  channel_id integer,
  user_id integer,
  PRIMARY KEY (id)
);

CREATE TABLE Videos (
  id integer,
  title varchar(50),
  descriiption text,
  channel_id integer,
  PRIMARY KEY (id)
);

CREATE TABLE Comments (
  id integer,
  video_id integer,
  user_id integer,
  comment text,
  PRIMARY KEY (id)
);

CREATE TABLE Liks (
  id integer,
  video_id integer,
  user_id integer,
  PRIMARY KEY (id)
);

