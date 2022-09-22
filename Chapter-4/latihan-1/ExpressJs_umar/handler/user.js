const db = require("../external/postgres");

module.exports = {
  getUsers: (_req, res) => {
    return new Promise(async (resolve, _reject) => {
      try {
        const response = await db.query(" WITH suka AS (SELECT likes.user_id, COUNT(*) FROM likes GROUP BY likes.user_id), komentar AS (SELECT comments.user_id, COUNT(*) FROM comments GROUP BY comments.user_id), subscribe AS (SELECT channel_subscribers.user_id, COUNT(*) FROM channel_subscribers GROUP BY channel_subscribers.user_id) SELECT users.id AS id_user, users.name AS nama_user, suka.COUNT AS video_yang_disukai, komentar.COUNT AS video_yang_dikomentari, subscribe.COUNT AS channel_yang_diikuti FROM users LEFT JOIN suka ON suka.user_id = users.id LEFT JOIN komentar ON users.id = komentar.user_id LEFT JOIN subscribe ON users.id = subscribe.user_id ORDER BY users.id");
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
