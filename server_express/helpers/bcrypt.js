const bcrypt = require("bcrypt");

const hassPass = (pass) => {
  return bcrypt.hashSync(pass, 10);
};

module.exports = hassPass;
