const { application } = require("express");

module.exports = function(express, app) {
    var router = express.Router();

    router.get('/', function(req , res, next){
        res.render('index',{title:'Welcome to Chat'});

    })
    router.get('/chatroom',function(req, res, next){
        res.render('chatroom',{title:'Chatrooms'});
    })
    app.use('/', router);
}