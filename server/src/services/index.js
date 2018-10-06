const tdo = require('./tdo/tdo.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(tdo);
};
