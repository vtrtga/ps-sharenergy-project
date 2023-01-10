import Joi from "joi"

const newCustomerSchema = Joi.object({
  birthDate: Joi.string().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().required(),
  cpf: Joi.string().required(),
  address: Joi.string().required(),
});

export default newCustomerSchema;