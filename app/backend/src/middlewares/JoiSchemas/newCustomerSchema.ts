import Joi from "joi"

const newCustomerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  birthDate: Joi.string().required(),
  gender: Joi.string().allow(''),
  cpf: Joi.string().required(),
});

export default newCustomerSchema;