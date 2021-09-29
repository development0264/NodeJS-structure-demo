const Joi = require('joi');
const { password } = require('./custom.validation');

const register = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    subscriptionPlanId: Joi.number().required(),
    role: Joi.string(),
    mailingAddress: Joi.string(),
    gsitn: Joi.string(),
    userType: Joi.string(),
    phoneNo: Joi.string(),
  }),
};

const google = {
  body: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

const emailVerification = {
  body: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

module.exports = {
  register,
  emailVerification,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  google,
};
