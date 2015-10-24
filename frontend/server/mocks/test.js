module.exports = function(app) {
  var express = require('express');
  var server = express.Router();

  server.get('/login', function(req, res) {
    res.send({
      user: {
          id: 123,
          name: 'aaron'
      }
    });
  });


  server.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api', server);
};
