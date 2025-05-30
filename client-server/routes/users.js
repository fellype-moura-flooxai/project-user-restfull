var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

// Creates a JSON client
var client = restify.createJsonClient({
  url: 'https://27.0.0.1:4000'
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  client.get('/users', function(err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });

});

router.get('/:id', function(req, res, next) {

  client.get(`/users/${req.params.if}`, function(err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });

});

router.put('/:id', function(req, res, next) {

  client.put(`/users/${req.params.if}`, req.body, function (err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });

});

router.delete('/:id', function(req, res, next) {

  client.del(`/users/${req.params.if}`, function (err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });

});

router.post('/', function(req, res, next) {

  client.post(`/users`, req.body, function (err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });

});

module.exports = router;
