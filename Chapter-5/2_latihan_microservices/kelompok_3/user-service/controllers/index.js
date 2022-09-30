const adapter = require("../adapter/apiadapter");
const { User } = require("../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { KELAS_SERVICE_HOST, JWT_SIGNATURE_KEY = "rahasia" } = process.env;

const api = adapter(KELAS_SERVICE_HOST);

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

      // payload = {
      //   id: user.id,
      //   name: user.name,
      //   email: user.email,
      // };

      const token = jwt.sign(user, JWT_SIGNATURE_KEY);

      return res.status(200).json({
        status: false,
        message: "success",
        data: { token },
      });
    } catch (err) {
      next(err);
    }
  },
  registerKelas: async (req, res, next) => {
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
  findOneKelas: async (req, res, next) => {
    try {
      const { nama } = req.body;
      const { data } = await api.get("/kelas-get", { nama });

      return res.status(200).json({
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
  findAllKelas: async (req, res, next) => {
    try {
      const { data } = await api.get("/kelas_user");

      return res.status(200).json({
        status: true,
        message: "success",
        data: data.data,
      });
    } catch (err) {
      if (err.code == "ECONNREFUSED") {
        err = new Error(KELAS_SERVICE_HOST);
        // console.log(KELAS_SERVICE_HOST);
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
