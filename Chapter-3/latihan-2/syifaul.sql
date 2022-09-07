CREATE TABLE Users (
  id int,
  name char(50),
  email char(50),
  password password,
  PRIMARY KEY (id)
);

CREATE TABLE Channels (
  id int,
  user_id int,
  name char(50),
  desciption text,
  PRIMARY KEY (id)
);

CREATE TABLE Subscribers (
  id int,
  channel_id int,
  user_id int,
  PRIMARY KEY (id)
);

CREATE TABLE Videos (
  id int,
  title char(50),
  descriiption text,
  channel_id int,
  PRIMARY KEY (id)
);

CREATE TABLE Comments (
  id int,
  video_id int,
  user_id int,
  comment text,
  PRIMARY KEY (id)
);

CREATE TABLE Liks (
  id int,
  video_id int,
  user_id int,
  PRIMARY KEY (id)
);

