'use strict';
var bcrypt = require('bcrypt');
var { ROLE, MODULE } = require('../../utils/enum');
var { Role, Module, User, RoleAccess } = require('../../models');
var dummyAdmin = {
  name: 'admin',
  email: 'admin@mail.com',
  passowrd: 'admin123'
};
var dummyUser = {
  name: 'user',
  email: 'user@mail.com',
  passowrd: 'user123'
};

module.exports = {
  async up(queryInterface, Sequelize) {
    // create role
    for (var property in ROLE) {
      var role = await Role.findOne({ where: { name: property } });
      if (!role) {
        await Role.create({ name: property });
      }
    }

    // create module
    for (var property in MODULE) {
      var module = await Module.findOne({ where: { name: property } });
      if (!module) {
        await Module.create({ name: property });
      }
    }

    // create admin user
    var admin = await User.findOne({ where: { email: dummyAdmin.email } });
    if (!admin) {
      var password = await bcrypt.hash(dummyAdmin.passowrd, 10);
      admin = await User.create({
        name: dummyAdmin.name,
        email: dummyAdmin.email,
        password: password,
        role: ROLE.ADMIN
      });
    }
    console.log('ok');
    console.log(ROLE.USER)

    // create user
    var user = await User.findOne({ where: { email: dummyUser.email } });
    if (!user) {
      var password = await bcrypt.hash(dummyUser.passowrd, 10);
      user = await User.create({
        name: dummyUser.name,
        email: dummyUser.email,
        password: password,
        role: ROLE.USER
      });
    }


    // // create role-access for admin
    for (var property in MODULE) {
      var module = await Module.findOne({ where: { name: property } });
      var roleAdmin = await Role.findOne({ where: { name: ROLE.ADMIN } });
      var roleUser = await Role.findOne({ where: { name: ROLE.USER } });

      // admin roleAccess
      var ra = await RoleAccess.findOne({ where: { role_id: roleAdmin.id, module_id: module.id } });
      if (!ra) {
        await RoleAccess.create({
          role_id: roleAdmin.id,
          module_id: module.id,
          read: true,
          write: true,
        });
      }

      // user roleAccess
      var ura = await RoleAccess.findOne({ where: { role_id: roleUser.id, module_id: module.id } });
      if (!ura) {
        await RoleAccess.create({
          role_id: roleUser.id,
          module_id: module.id,
          read: true,
          write: false,
        });
      }
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
