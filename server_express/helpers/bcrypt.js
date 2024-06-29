const bcrypt = require("bcrypt");

const hassPass = (pass) => {
  return bcrypt.hashSync(pass, 10);
};

const comparePass = (plainPass, hashedPass) => {
  return bcrypt.compareSync(plainPass, hashedPass);
};

module.exports = { hassPass, comparePass };
