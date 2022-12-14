const { Mentor } = require("../db/models");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { nama, pekerjaan } = req.body;

      const mentor = await Mentor.create({
        nama,
        pekerjaan,
      });

      return res.status(201).json({
        status: true,
        message: "success",
        data: {
          id: mentor.id,
          nama: mentor.nama,
          pekerjaan: mentor.pekerjaan,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const where = {};
      const { id, nama, pekerjaan } = req.body;
      if (id) {
        where.id = id;
      }
      if (nama) {
        where.nama = nama;
      }
      if (pekerjaan) {
        where.pekerjaan = pekerjaan;
      }
      const mentor = await Mentor.findOne({ where });
      if (!mentor) {
        return req.status(400).json({
          status: false,
          message: "not found!",
          data: null,
        });
      }

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
      next(err);
    }
  },
};
