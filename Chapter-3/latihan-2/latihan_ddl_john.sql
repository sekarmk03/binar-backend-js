users (id, name, email, password);
channels (id, id_user, name, description);
subscribers (id, channel_id, id_user);
videos (id, title, description, channel_id);
comments (id, video_id, id_user, comment);
likes (id, video_id, id_user);

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL 
);


CREATE TABLE channels (
  id BIGSERIAL PRIMARY KEY, 
  id_user INT NOT NULL, 
  name varchar(255) NOT NULL
  description TEXT
);

CREATE TABLE subscribers (
  id BIGSERIAL PRIMARY KEY, 
  channel_id INT NOT NULL, 
  id_user INT 
);

CREATE TABLE videos (
  id bigserial PRIMARY KEY, 
  title varchar(50) NOT NULL,
  description TEXT,
  channel_id INT
);

CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY, 
  video_id INT,
  id_user INT,
  comments TEXT
);

CREATE TABLE likes (
  id BIGSERIAL PRIMARY KEY, 
  video_id INT NOT NULL,
  id_user INT NOT NULL
);