CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE channels (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
);

CREATE TABLE subsribers (
    id BIGSERIAL PRIMARY KEY,
    channel_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
);

CREATE TABLE videos (
    id BIGSERIAL PRIMARY KEY,
    description TEXT,
    channel_id INTEGER NOT NULL
);

CREATE TABLE comments (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    comment VARCHAR(255) NOT NULL
);

CREATE TABLE likes (
    id BIGSERIAL PRIMARY KEY,
    video_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
);
