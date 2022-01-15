const { application } = require("express");

module.exports = function(express, app) {
    var router = express.Router();

    router.get('/', function(req , res, next){
        res.render('index',{title:'Welcome to Chat'});

    })
    router.get('/chatroom',function(req, res, next){
        res.render('chatroom',{title:'Chatrooms'});
    })

    router.get('/setcolor', function(req, res, next){
        req.session.favColor = "Green"
        res.send('Setting the Color');
    })

    router.get('/getcolor', function(req, res, next){
        res.send('Color' + (req.session.favcolor===undefinded?'Not Found':req.session.favColor))
    })
    app.use('/', router);
}