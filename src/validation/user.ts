import Joi from "joi";

export const registerSchema = Joi.object({
  first_name: Joi.string().min(3).max(30).required(),
  last_name: Joi.string().min(3).max(30).required(),
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  mobile: Joi.string().min(10),
  password: Joi.string().min(8).required(),
  confirm_password: Joi.string().min(8),
  country_code: Joi.string(),
  city: Joi.string().required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const updateSchema = Joi.object({
  first_name: Joi.string().min(3).max(30).required(),
  last_name: Joi.string().min(3).max(30).required(),
  username: Joi.string().min(3).max(30).required(),
  mobile: Joi.string().min(10),
  country_code: Joi.string(),
  city: Joi.string().required(),
});
