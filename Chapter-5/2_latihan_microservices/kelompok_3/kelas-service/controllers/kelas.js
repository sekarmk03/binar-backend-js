const { Kelas } = require("../db/models");
const kelas = require("../db/models/kelas");

module.exports = {
  register: async (req, res, next) => {
    try {
      const { nama, deskripsi, mentor_id, level } = req.body;

      const exist = await Kelas.findOne({ where: { nama } });
      if (exist) {
        return res.status(400).json({
          status: false,
          message: "email already used!",
          data: null,
        });
      }

      const user = await kelas.create({
        nama,
        deskripsi,
        mentor_id,
        level,
      });

      return res.status(201).json({
        status: true,
        message: "success",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          pekerjaan: user.pekerjaan,
        },
      });
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { nama } = req.body;
      const exist = await Kelas.findOne({ where: { nama } });
      if (exist) {
        return res.status(400).json({
          status: false,
          message: "email already used!",
          data: null,
        });
      }

      return res.status(200).json({
        status: false,
        message: "success",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  },
  findAll: async (req, res, next) => {
    try {
      const exist = await Kelas.findAll();
      if (!exist) {
        return res.status(400).json({
          status: false,
          message: "not found",
          data: null,
        });
      }

      return res.status(200).json({
        status: false,
        message: "success",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  },
};
