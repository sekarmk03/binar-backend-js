const { Mentor } = require("../db/models");
const { response } = require("express");

module.exports = {

    view: async (req, res, next) => {
        const mentor = Mentor.findAll({raw:true});
        return res.status(200).json({
            status: true,
            message: 'get data mentor succees',
            data: mentor
        });
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
                    message: 'not found!',
                    data: null
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

  create: async (req, res, next) => {
    try {
      const { nama, pekerjaan } = req.body;

      const mentor = await Mentor.create({
        id,
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
    } catch (err) {
      next(err);
    }
  },
};
