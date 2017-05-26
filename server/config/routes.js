var stars = require('./../controllers/stars.js');
const path = require('path')

module.exports = function(app) {
  app.get('/stars', function(req, res){
    stars.index(req, res);
  }),
  app.get('/stars5', function(req, res){
    stars.index(req, res);
  }),

  app.post('/new', function(req,res){
    return stars.create(req,res)
  }),

  app.get('/show/:id', function(req, res) {
    stars.show(req,res)
  }),
  app.post('/updatestar/:id', function(req,res){
    return stars.update(req,res);
  }),
  app.get('/destroy/:id', function(req, res) {
    return stars.destroy(req,res)
  }),
  app.get('/note/:id1/destroy/:id2', function(req, res) {
    return stars.notedestroy(req,res)
  }),
  app.post('/newnote/:id', function(req,res){
    return stars.notecreate(req,res)
  }),
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/dist/index.html'));
  })
}
