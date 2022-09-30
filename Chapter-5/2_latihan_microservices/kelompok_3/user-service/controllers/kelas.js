const adapter = require("../adapter/apiadapter");
const { USER_SERVICE_HOST } = process.env;

const api = adapter(USER_SERVICE_HOST);

module.exports = {
  register: async (req, res, next) => {
    try {
      const { nama, deskripsi, mentor_id, level } = req.body;
      const { data } = await api.post("/kelas/register", {
        nama,
        deskripsi,
        mentor_id,
        level,
      });

      return res.status(201).json({
        status: true,
        message: "success",
        data: data.data,
      });
    } catch (err) {
      if (err.code == "ECONNREFUSED") {
        err = new Error("service anvailable!");
        return next(err);
      }

      if (err.response) {
        const { status, data } = err.response;
        res.status(status).json(data);
      }

      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { data } = await api.get(`/kelas/${id}`);

      const user = data.data;
      if (!user) {
        return res.status(400).json({
          status: false,
          message: "not found",
          data: null,
        });
      }
      return res.status(200).json({
        status: false,
        message: "success",
        data: {
          id: user.id,
          nama: user.nama,
          deskripsi: user.deskripsi,
          level: user.level,
        },
      });
    } catch (err) {
      next(err);
    }
  },
};
