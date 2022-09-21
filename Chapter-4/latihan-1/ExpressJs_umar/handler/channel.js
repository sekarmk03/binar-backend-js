const external = require("../external");
const db = external.postgres;

// Menampilkan data channel
module.exports = {
  getChannel: (_req, res) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await db.query('SELECT channels.id, channels.name AS nama_channel, users.name AS pemilik_channel FROM channels JOIN users ON channels.user_id = users.id');
        const result = {
          jsonApi : {
            version: '1.0',
          },
          meta: {
            author: 'Muhammad Umar Mansyur',
            copyright: 'Binar Academy',
          },
          status: 200,
          data: data.rows
        }
        resolve(res.json(result));
      } catch (error) {
        console.log(error.message)
      }
    });
  },
};
