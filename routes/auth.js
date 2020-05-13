const express = require('express');
const {
  register,
  login,
  getMe,
  updateDetails,
  updatePassword,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth');

const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/me').get(protect, getMe);

router.route('/updatedetails').put(protect, updateDetails);

router.route('/updatepassword').put(protect, updatePassword);

router.route('/forgotpassword').post(forgotPassword);

router.route('/resetpassword/:resettoken').put(resetPassword);

module.exports = router;
