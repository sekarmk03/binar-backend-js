const adapter = require("../adapter/api-adapter");
const { User } = require("../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { USER_SERVICE_HOST } = process.env;

const api = adapter(USER_SERVICE_HOST);

module.exports = {
  register: async (req, res, next) => {
    try {
      const { name, email, password, pekerjaan } = req.body;

      const exist = await User.findOne({ where: { email } });
      if (exist) {
        return res.status(400).json({
          status: false,
          message: "email already used!",
          data: null,
        });
      }

      const encrypted = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: encrypted,
        pekerjaan,
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

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(400).json({
          status: false,
          message: "email or password doesn't match!",
        });
      }

      const correct = await bcrypt.compare(password, user.password);
      if (!correct) {
        return res.status(400).json({
          status: false,
          message: "email or password doesn't match!",
        });
      }

      // generate token
      payload = {
        id: user.id,
        name: user.name,
        email: user.email,
      };
      const token = jwt.sign(payload, JWT_SIGNATURE_KEY);

      return res.status(200).json({
        status: false,
        message: "success",
        data: {
          token: token,
        },
      });
    } catch (err) {
      next(err);
    }
  },
};
