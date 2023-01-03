const { User } = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_KEY } = process.env;
module.exports = {
  create: async (req, res, next) => {
    try {
      const { nama, email, password, pekerjaan } = req.body;

      const exist = await User.findOne({ where: { email } });
      if (exist) {
        return res.status(400).json({
          status: false,
          message: "Email already used",
          data: null,
        });
      }

      const encrypted = await bcrypt.hash(password, 10);

      const created = await User.create({
        nama,
        email,
        password: encrypted,
        pekerjaan,
      });

      return res.status(201).json({
        status: true,
        message: "Created",
        data: {
          nama: created.nama,
          email: created.email,
          pekerjaan: created.pekerjaan,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      console.log(email);
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(400).json({
          status: false,
          message: "Email / Password doesn't match",
        });
      }

      const correct = await bcrypt.compare(password, user.password);
      if (!correct) {
        return res.status(400).json({
          status: false,
          message: "Email / Password doesn't match",
        });
      }

      const payload = {
        id: user.id,
        nama: user.nama,
        email: user.email,
      };

      const token = jwt.sign(payload, JWT_KEY);

      return res.status(200).json({
        status: true,
        message: "Success Login",
        data: { token },
      });
    } catch (error) {
      next(error);
    }
  },
  index: async (req, res, next) => {
    try {
      const get = await User.findAll();

      return res.status(200).json({
        status: true,
        message: "Success get all data",
        data: get,
      });
    } catch (error) {
      next(error);
    }
  },
};
