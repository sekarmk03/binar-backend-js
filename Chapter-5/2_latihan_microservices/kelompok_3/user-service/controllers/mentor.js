const adapter = require("../adapter/apiadapter");
const { USER_SERVICE_HOST } = process.env;

const api = adapter(USER_SERVICE_HOST);

module.exports = {
  register: async (req, res, next) => {
    try {
      const { nama, pekerjaan } = req.body;
      const { data } = await api.post("/mentor/create", {
        nama,
        pekerjaan,
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
      const { id, nama, pekerjaan } = req.body;
      const { data } = await api.post("/mentor/get", {
        id,
        nama,
        pekerjaan,
      });

      const mentor = data.data;
      return res.status(200).json({
        status: true,
        message: "success",
        data: {
          id: mentor.id,
          nama: mentor.nama,
          pekerjaan: mentor.pekerjaan,
        },
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
};
