'use strict';

const express = require('express');
const logger = require('morgan');

// Security
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

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

// ---- sequrity ----
// Express 4.x middleware which sanitizes user-supplied
// data to prevent MongoDB Operator Injection.
app.use(mongoSanitize());
// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());
// Used to limit repeated requests.
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);
// Express middleware to protect against HTTP Parameter Pollution attacks.
app.use(hpp());
// Middleware that can be used to enable CORS with various options.
app.use(cors({ origin: '*' }));
// ---- -------- ----

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
