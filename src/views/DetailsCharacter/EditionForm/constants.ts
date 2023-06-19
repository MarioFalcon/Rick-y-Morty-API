import { object, string } from 'yup'

export const ValidationSchema = object({
  name: string().required(),
  species: string().required(),
  status: string().required(),
})
