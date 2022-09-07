CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE channels (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL DEFAULT '-'
);

CREATE TABLE videos (
    id INTEGER PRIMARY KEY,
    channel_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL DEFAULT '-'
);

CREATE TABLE likes (
    id INTEGER PRIMARY KEY,
    video_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
);

CREATE TABLE comments (
    id INTEGER PRIMARY KEY,
    video_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    comment TEXT NOT NULL DEFAULT '-'
);

CREATE TABLE subscribers (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    channel_id INTEGER NOT NULL
);