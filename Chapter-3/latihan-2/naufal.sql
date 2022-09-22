CREATE TABLE "Users" (
  "id" int NOT NULL,
  "name" varchar(45),
  "email" varchar(255),
  "password" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "Channels" (
  "id" int NOT NULL,
  "user_id" int,
  "name" varchar(45),
  "description" text,
  PRIMARY KEY ("id")
);

CREATE TABLE "Subscribers" (
  "id" int NOT NULL,
  "channel_id" int,
  "user_id" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "Videos" (
  "id" int NOT NULL,
  "title" varchar(45),
  "description" text,
  "channel_id" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "Comments" (
  "id" int NOT NULL,
  "video_id" int,
  "user_id" int,
  "comment" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "Likes" (
  "id" int NOT NULL,
  "video_id" int,
  "user_id" int,
  PRIMARY KEY ("id")
);

