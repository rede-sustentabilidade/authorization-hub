'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function sayHello(request, reply) {
  'use strict';

  reply({
    hello: request.params.name
  });
}

function register(server, options, next) {
  'use strict';

  server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: sayHello
  });

  return next();
}

register.attributes = {
  name: 'api'
};

exports['default'] = register;
module.exports = exports['default'];