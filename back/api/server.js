'use strict';

const express = require('express');
const logger = require('morgan');

// Creates an Express application.
// The express() function is a top-level function exported by the express module.
const app = express();

// HTTP request logger middleware in development mode
// Concise output colored by response status for development use.
if (NODE_ENV === 'development') {
  app.use(logger('dev'));
}

// Body parser:
// - it parses incoming requests with urlencoded payloads;
app.use(express.urlencoded());
// - it parses incoming requests with JSON payloads.
app.use(express.json());

// Binds and listens for connections on the specified port.
// This method is identical to Node’s http.Server.listen().
const server = app.listen(3300, () => {
  console.log('Server started on port: 3300');
});

// The 'unhandledRejection' event is useful for detecting and keeping track of
// promises that were rejected whose rejections have not yet been handled.
process.on('unhandledRejection', (err, promise) => {
  console.log('Server Error');

  // close server and exit process
  server.close(() => process.exit(1));
});
