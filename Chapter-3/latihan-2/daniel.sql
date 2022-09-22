create table users(
    id bigserial primary key,
    name varchar(100) not null,
    email varchar(50) not null,
    password varchar(50) not null
);

create table channels(
    id bigserial primary key,
    user_id int not null,
    name varchar(100) not null,
    description text
);

create table subscribers(
    id bigserial primary key,
    channel_id int not null,
    user_id int not null
);

create table videos(
    id bigserial primary key,
    title varchar(100) not null,
    description text,
    channel_id int not null
);

create table comments(
    id bigserial primary key,
    video_id int not null,
    user_id int not null,
    comment text 
);

create table likes(
    id bigserial primary key,
    video_id int not null,
    user_id int not null
);

