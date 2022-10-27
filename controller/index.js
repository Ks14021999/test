const User = require('../model/index.js')

module.exports.home = function(req, res){
    return res.render('home');
}

module.exports.signup = function(req, res){
    return res.render('signup');
}

module.exports.signupDone = (req, res) =>{
    if(req.body.password != req.body.confirm_password){
        console.log('Password mismatch');
        return res.redirect('back');
    }

    User.findOne({email : req.body.email}, (err, data) =>{
        if(!data){
            User.create(req.body, (err, data) =>{
                if(err){
                    return console.log(err);
                }
                console.log(data);
                return res.redirect('./signin');
            });
        }
        else{
            console.log('User already exist');
            return res.redirect('./signin');
        }
    });
};

module.exports.signin = function(req, res){
    return res.render('signin');
}

module.exports.createSession = (req, res) =>{
    return res.redirect('/user/login');
};

module.exports.login = (req, res) =>{
    return res.render('login');
}