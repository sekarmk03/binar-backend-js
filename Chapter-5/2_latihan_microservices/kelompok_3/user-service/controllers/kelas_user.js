const adapter = require("../adapter/apiadapter");
const { USER_SERVICE_HOST } = process.env;

const api = adapter(USER_SERVICE_HOST);

module.exports = {
  register: async (req, res, next) => {
    try {
      const { user_id, kelas_id } = req.body;
      const { data } = await api.post("/kelas_user/create", {
        user_id,
        kelas_id,
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
};
