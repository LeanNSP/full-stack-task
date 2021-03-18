'use strict';

module.exports = app => {
  app.use('/auth', require('./auth.router'));
};
