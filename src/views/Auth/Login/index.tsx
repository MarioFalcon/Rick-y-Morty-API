import { FC, memo } from 'react'
import {
  Container,
  Form,
  FormContent,
  InputController,
  Label,
  Input,
  InputError,
} from './styles';


import { Formik } from 'formik'
import { initialValues, validationLoginSchema } from './constant'
import { Link } from 'react-router-dom'
import useLogic from './logic'
import Button from '../../../components/Button/button';


const Login: FC = () => {
  const { handleOnSubmit } = useLogic()

  return (
    <>

      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationLoginSchema}
          onSubmit={handleOnSubmit}
        >
          {({ errors, handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit}>
              <FormContent>
                <InputController>
                  <Label>Email</Label>
                  <Input type="email" name="email" onChange={handleChange} />
                  {errors?.email && <InputError>{errors.email}</InputError>}
                </InputController>
                <InputController>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                  {errors?.password && (
                    <InputError>{errors.password}</InputError>
                  )}
                </InputController>
                <Button type="submit">Login</Button>
                <Link to="/signup">Create an account</Link>
              </FormContent>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}

export default memo(Login)

