module.exports = function(app) {
  app.get('/new/:url*', app.api.create);

  app.get('/:url', app.api.visit);
}
