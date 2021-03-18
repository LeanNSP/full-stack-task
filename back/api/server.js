'use strict';

const express = require('express');

const app = express();

const server = app.listen(3300, () => {
  console.log('Server started on port: 3300');
});

process.on('unhandledRejection', (err, promise) => {
  console.log('Server Error');
  server.close(() => process.exit(1));
});
