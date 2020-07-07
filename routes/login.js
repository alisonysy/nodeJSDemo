const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const {passwordSecret} = require('../cipher/userInfo');
const {signUserInfo} = require('../services/jwt');

router.post('/',function(req,res,next){
  // get user input and encrypt password
  let {username, password} = req.body;
  crypto.pbkdf2(password,passwordSecret.SALT,passwordSecret.ITERATIONS,passwordSecret.KEYLEN,passwordSecret.DIGEST,(err,derivedKey) => {
    if(err) throw err;
    console.log('derivedKey----',derivedKey, derivedKey.toString('hex'));
    signUserInfo({username,password},(err,token) => {
      if(err) throw err;
      console.log('token is------',token);
      res.send(`Request received, your username is ${username}`);
    });
  })
  // should redirect to home page
});

module.exports = router;

