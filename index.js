"use strict";

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src.js
//
require("babel-polyfill");

// promise returning function
function get(url) {
  return new Promise(function (resolve, reject) {
    (0, _request2.default)({
      method: 'GET',
      url: url,
      json: true,
      headers: {
        'User-Agent': 'request'
      }
    }, function (err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

// create a new "async" function so we can use the "await" keyword
function printPublicGists() {
  var gists;
  return regeneratorRuntime.async(function printPublicGists$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(get('https://api.github.com/gists/public'));

        case 3:
          gists = _context.sent;


          // now you can write this like syncronous code!
          gists.forEach(function (gist) {
            console.log(gist.description);
          });
          _context.next = 9;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, this, [[0, 7]]);
}

printPublicGists();
