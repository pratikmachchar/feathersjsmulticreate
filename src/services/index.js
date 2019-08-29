const playground = require('./playground/playground.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(playground);
};
