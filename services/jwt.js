const jwt = require('jsonwebtoken');

const {jwtUserInfoSecret} = require('../cipher/userInfo');

module.exports.signUserInfo = (userInfo,cb) => {
  jwt.sign(userInfo, jwtUserInfoSecret.SECRET, cb);
}