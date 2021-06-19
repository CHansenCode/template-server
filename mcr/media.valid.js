import Joi from "joi";

//REGISTER
export const createOneValidation = Joi.object({
  //INFO
  title: Joi.string().min(1).max(30).alphanum().required(),
  description: Joi.string().max(30).alphanum(),

  category: Joi.string().max(30).alphanum(),

  //Values
  color: Joi.string().max(30).alphanum(),
  height: Joi.number().max(20000),
  width: Joi.number().max(20000),

  //SEO & ACCESS
  alt: Joi.string().min(0).max(256).alphanum(),

  //FILE
  fileName: Joi.string(),
  urls: {
    full: Joi.string(),
    regular: Joi.string(),
    small: Joi.string(),
    thumb: Joi.string(),
  },
});
