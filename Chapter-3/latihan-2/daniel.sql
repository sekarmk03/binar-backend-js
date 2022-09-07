CREATE TABLE users(
    id bigserial primary key,
    name varchar(100) not null,
    email varchar(50) not null,
    password varchar(50) not null
);

create table channels(
    id int primary key not null,
    user_id int not null,
    name varchar(100) not null,
    description text
);

create table subscribers(
    id int primary key not null,
    channel_id int not null,
    user_id int not null
);

create table videos(
    id int primary key not null,
    title varchar(100) not null,
    description text,
    channel_id int not null
);

create table comments(
    id int primary key not null,
    video_id int not null,
    user_id int not null,
    comment text 
);

create table likes(
    id int primary key not null,
    video_id int not null,
    user_id int not null
);

