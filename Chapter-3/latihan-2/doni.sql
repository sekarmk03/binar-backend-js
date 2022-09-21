CREATE TABLE Users (
    id int NOT NULL,
    name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(20) NOT NULL

);

CREATE TABLE Channels (
    id int NOT NULL,
    user varchar(50) NOT NULL,
    user_id varchar(50) NOT NULL
);

CREATE TABLE Subscribers (
    id int NOT NULL,
    channel_id int NOT NULL,
    user_id int NOT NULL

);

CREATE TABLE Videos (
    id int NOT NULL,
    tittle varchar(50) NOT NULL,
    description varchar(1000),
    channel_id int NOT NULL

);

CREATE TABLE Comments (
    id int NOT NULL,
    video_id int NOT NULL,
    user_id int NOT NULL,
    comment varchar(255) NOT NULL
);

CREATE TABLE Likes (
    id int NOT NULL,
    video_id int NOT NULL,
    user_id int NOT NULL,
);