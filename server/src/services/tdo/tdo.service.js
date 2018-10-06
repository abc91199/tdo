// Initializes the `tdo` service on path `/tdo`
const createService = require('feathers-nedb');
const createModel = require('../../models/tdo.model');
const hooks = require('./tdo.hooks');


module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tdo', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tdo');

  service.hooks(hooks);

  // on connection send the data
  app.on('connection', socket => {
    console.log("connected");
  });

};
