const db = require("../external/postgres");

module.exports = {
  getVideo: (_req, res) => {
    return new Promise(async (resolve, _reject) => {
      try {
        const response = await db.query(
          "SELECT videos.id AS id_video, title AS judul_video, videos.description AS deskripsi_video, channels.name AS nama_channel FROM videos JOIN channels ON videos.channel_id = channels.id"
        );
        const result = {
          jsonApi: {
            version: "1.0",
          },
          meta: {
            authors: 'Muhammad Umar Mansyur',
            copyrigth: 'Binar Academy',
          },
          data: response.rows
        };
        resolve(res.json(result));
      } catch (error) {
        console.log(error.message);
      }
    });
  },
  getLikeVideo: (_req, res) => {
    return new Promise(async (resolve, _reject) => {
      try {
        const response = await db.query('WITH subscribes AS (SELECT channel_subscribers.channel_id, COUNT(*) as pengikut FROM channel_subscribers GROUP BY channel_subscribers.channel_id), videonya AS (SELECT videos.channel_id, COUNT(*) as video FROM videos GROUP BY videos.channel_id), suka as (SELECT videos.channel_id, COUNT(videos.channel_id) as jumlah FROM videos JOIN likes ON videos.id = likes.video_id GROUP BY videos.channel_id)SELECT channels.id AS id_channel, channels.name AS nama_channel,      subscribes.pengikut AS jumlah_pengikut, videonya.video AS jumlah_video, suka.jumlah AS jumlah_like FROM channels JOIN subscribes ON subscribes.channel_id = channels.id JOIN videonya ON videonya.channel_id = channels.id JOIN suka ON suka.channel_id = videonya.channel_id');
        const result = {
          jsonApi: {
            version: "1.0",
          },
          meta: {
            authors: 'Muhammad Umar Mansyur',
            copyrigth: 'Binar Academy',
          },
          data: response.rows
        };
        resolve(res.json(result));
      } catch (error) {
        console.log(error)
      }
    });
  },
};
