const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const {passwordSecret} = require('../cipher/userInfo');

router.post('/',function(req,res,next){
  let {username, password} = req.body;
  crypto.pbkdf2(password,passwordSecret.SALT,passwordSecret.ITERATIONS,passwordSecret.KEYLEN,passwordSecret.DIGEST,(err,derivedKey) => {
    if(err) throw err;
    console.log('derivedKey----',derivedKey, derivedKey.toString('hex'));
    res.send(`Request received, your username is ${username}`);
  })
  // should redirect to home page
});

module.exports = router;

