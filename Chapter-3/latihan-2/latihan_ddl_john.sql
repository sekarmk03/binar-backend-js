users (id, name, email, password);
channels (id, id_users, name, description);
subscribers (id, id_channels, id_users);
videos (id, title, description, channel_id);
comments (id, video_id, id_users, comment);
likes (id, video_id, id_user);

CREATE TABLE users(
    id_users BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL 
);


CREATE TABLE channels (
  id_channels BIGSERIAL PRIMARY KEY, 
  id_users INT NOT NULL, 
  name varchar(255) NOT NULL,
  description TEXT
);

CREATE TABLE subscribers (
  id_subscribers BIGSERIAL PRIMARY KEY, 
  id_channels INT NOT NULL, 
  id_users INT NOT NULL
);

CREATE TABLE videos (
  id_videos bigserial PRIMARY KEY, 
  title varchar(50) NOT NULL,
  description TEXT,
  id_channels INT NOT NULL
);

CREATE TABLE comments (
  id_comments BIGSERIAL PRIMARY KEY, 
  id_videos INT NOT NULL,
  id_users INT NOT NULL,
  comments TEXT
);

CREATE TABLE likes (
  id_likes BIGSERIAL PRIMARY KEY, 
  id_videos INT NOT NULL,
  id_users INT NOT NULL
);