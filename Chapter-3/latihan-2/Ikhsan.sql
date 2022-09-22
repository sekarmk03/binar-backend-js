CREATE TABLE "Users" (
  "id_user" bigserial,
  "nama_user" varchar,
  "email" varchar,
  "password" varchar,
  PRIMARY KEY ("id_user")
);
CREATE TABLE "channels" (
  "id" bigserial,
  "user_id" int,
  "name" varchar,
  "description" text,
  PRIMARY KEY ("id")
);
CREATE TABLE "videos" (
  "id_video" bigserial,
  "tittle" varchar,
  "description" text,
  "channel_id" varchar,
  PRIMARY KEY ("id_video")
);
CREATE TABLE "comments" (
  "id_comments" bigserial,
  "video_id" int,
  "user_id" int,
  "comment" text,
  PRIMARY KEY ("id_comments")
);
CREATE TABLE "subscribers" (
  "id_subscriber" bigserial,
  "channel_id" int,
  "user_id" int,
  PRIMARY KEY ("id_subscriber")
);
CREATE TABLE "likes" (
  "id_likes" bigserial,
  "video_id" int,
  "user_id" int,
  PRIMARY KEY ("id_likes")
);








