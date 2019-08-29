// Initializes the `playground` service on path `/playground`
const createService = require('feathers-sequelize');
const createModel = require('../../models/playground.model');
const hooks = require('./playground.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
    multi: [ 'create' ] // list of method names
  };

  // Initialize our service with any options it requires
  app.use('/playground', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('playground');

  service.hooks(hooks);
};
