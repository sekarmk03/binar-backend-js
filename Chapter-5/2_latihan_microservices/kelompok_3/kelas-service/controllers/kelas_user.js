const { Kelas_user } = require("../db/models");
const { response } = require("express");

module.exports = {
  index: async (req, res, next) => {
    try {
      const kelas_user_data = await Kelas_user.findAll({ raw: true });
      return res.status(200).json({
        status: true,
        message: "Get all data successfully",
        data: kelas_user_data,
      });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const { id, user_id, kelas_id } = req.body;

      const data = await Kelas_user.create({
        id,
        user_id,
        kelas_id,
      });

      return res.status(201).json({
        status: true,
        message: "success",
        data: {
          id: data.id,
          user_id: data.user_id,
          kelas_id: data.kelas_id,
        },
      });
    } catch (err) {
      next(err);
    }
  },
};
