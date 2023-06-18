import { number, object, string } from 'yup'

export const InitialValues = {
  displayName: '',
  phoneNumber: '',
  email: '',
  password: '',
}

export const ValidationSchema = object({
  displayName: string().required('name is a required field'),
  phoneNumber: number(),
  email: string()
    .email('not a valid email')
    .required('email is a required field'),
  password: string()
    .required('password is a required field')
    .min(6, 'password must have at least 6 characters'),
})