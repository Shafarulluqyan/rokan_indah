"use strict";

const hassPass = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //users
    const users = require("../data/user.json");
    users.forEach((user) => {
      delete user.id;
      user.password = hassPass(user.password);
      user.createdAt = user.updatedAt = new Date();
    });
    //menu's
    const menus = require("../data/menu.json");
    menus.forEach((menu) => {
      delete menu.id;
      menu.createdAt = menu.updatedAt = new Date();
    });
    const images = require("../data/image.json");
    images.forEach((image) => {
      delete image.id;
      image.createdAt = image.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("users", users, {});
    await queryInterface.bulkInsert("menus", menus, {});
    await queryInterface.bulkInsert("images", images, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", users, {});
    await queryInterface.bulkDelete("menus", menus, {});
    await queryInterface.bulkDelete("images", images, {});
  },
};
