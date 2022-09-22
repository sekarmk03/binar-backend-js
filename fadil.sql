CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL
);

CREATE TABLE channels (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name varchar(50) NOT NULL,
    description varchar(50) NOT NULL
);

CREATE TABLE subscribers (
    id BIGSERIAL PRIMARY KEY,
    channel_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
);

CREATE TABLE videos (
    id BIGSERIAL PRIMARY KEY,
    tittle varchar(50) NOT NULL,
    description varchar(50) NOT NULL,
    channel_id INTEGER NOT NULL
);

CREATE TABLE comments (
    id BIGSERIAL PRIMARY KEY,
    video_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    comment varchar(50) NOT NULL
);

CREATE TABLE likes (
    id BIGSERIAL PRIMARY KEY,
    video_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
);