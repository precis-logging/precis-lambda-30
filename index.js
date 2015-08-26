var fs = require('fs');
var path = require('path');
var Lambda = require('lambda-30').Lambda;

var Plugin = function(options){
  var server = options.server;
  var ui = options.ui;
  var filename = path.resolve(__dirname, 'lib/lambda-30.js');

  server.route([
    {
      method: 'GET',
      path: '/vendor/lambda-30/lambda.js',
      handler: function(req, reply){
        return reply.file(filename);
      }
    },
  ]);

  ui.register([
    {
      injectHeaders: [
        '<script src="/vendor/lambda-30/lambda.js" type="text/javascript"></script>',
      ]
    },
  ]);
};

module.exports = Plugin;
