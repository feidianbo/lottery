
/*
 * GET home page.
 */

exports.index = function(req, res){
    var soap = require('soap');
    console.log(soap);
  res.render('index', { title: 'Express' });
};