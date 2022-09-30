const { Kelas } = require("../db/models");
const { response } = require("express");

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

      const user = await Kelas.create({
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
          nama: user.nama,
          deskripsi: user.deskripsi,
          level: user.level,
        },
      });
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const exist = await Kelas.findOne({ where: { id } });
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
        data: {
          id: exist.id,
          nama: exist.nama,
          deskripsi: exist.deskripsi,
          level: exist.level,
        },
      });
    } catch (err) {
      next(err);
    }
  },
  //   findAll: async (req, res, next) => {
  //     try {
  //       const exist = await Kelas.findAll();
  //       if (!exist) {
  //         return res.status(400).json({
  //           status: false,
  //           message: "not found",
  //           data: null,
  //         });
  //       }

  //       return res.status(200).json({
  //         status: false,
  //         message: "success",
  //         data: exist,
  //       });
  //     } catch (err) {
  //       next(err);
  //     }
  //   },
};
