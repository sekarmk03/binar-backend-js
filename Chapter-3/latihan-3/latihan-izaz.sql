-- SOAL NO 1.
SELECT
    videos.id AS id_video,
    videos.title AS judul_video,
    videos.description AS deskripsi_video,
    channels.nae AS nama_channel
FROM videos
JOIN channels ON channels.id = videos.channel_id;

-- SOAL NO 2.
SELECT
    channels.id AS id_channel,
    channels.name AS nama_channel,
    users.name AS pemilik_channel
FROM channels
JOIN users ON users.id = channels.user_id;

-- SOAL NO 3.
SELECT
    videos.id AS id_video,
    videos.title AS judul_video,
    count(likes.id) AS jumlah_like
FROM videos
JOIN likes ON likes.video_id = videos.id
GROUP BY videos.id, videos.title
ORDER BY jumlah_like DESC;

-- SOAL NO 4.
WITH suka AS (SELECT likes.user_id, COUNT(*)
FROM likes GROUP BY likes.user_id),
komentar AS (SELECT comments.user_id, COUNT(*)
FROM comments GROUP BY comments.user_id),
subscribe AS (SELECT channel_subscribers.user_id, COUNT(*)
FROM channel_subscribers GROUP BY channel_subscribers.user_id)
SELECT users.id AS id_user, users.name AS nama_user,
suka.COUNT AS video_yang_disukai,
komentar.COUNT AS video_yang_dikomentari,
subscribe.COUNT AS channel_yang_diikuti
FROM users
LEFT JOIN suka ON suka.user_id = users.id
LEFT JOIN komentar ON users.id = komentar.user_id
LEFT JOIN subscribe ON users.id = subscribe.user_id
ORDER BY users.id;