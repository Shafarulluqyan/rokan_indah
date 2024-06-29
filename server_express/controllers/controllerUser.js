const { user } = require("../models");

class Controller {
  static async getAllUsers(req, res) {
    try {
      const users = await user.findAll();
      res.status(200).json(users);
    } catch (err) {
      console.log(err, "<<");
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
