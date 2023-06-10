import { FC, memo } from 'react'
import {
    Container,
    Form,
    FormContent,
    Input,
    InputController,
    InputError,
    Label,
  } from './styles';
  
  import { Formik } from 'formik'
  import { initialValues, validationSignupSchema } from './constant'
  import useLogic from './logic'
  import { Link } from 'react-router-dom'
import Button from '../../../components/Button/button';
import Header from '../../../components/Header/header';

  
  const Signup: FC = () => {
    const { handleOnSubmit } = useLogic()
  
    return (
      <>
        <Header />
        <Container>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSignupSchema}
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
                  <InputController>
                    <Label>Name</Label>
                    <Input type="text" name="name" onChange={handleChange} />
                    {errors?.name && <InputError>{errors.name}</InputError>}
                  </InputController>
                  <InputController>
                    <Label>Surname</Label>
                    <Input type="text" name="surname" onChange={handleChange} />
                    {errors?.surname && (
                      <InputError>{errors.surname}</InputError>
                    )}
                  </InputController>
                  <InputController>
                    <Label>Age</Label>
                    <Input type="number" name="age" onChange={handleChange} />
                    {errors?.age && <InputError>{errors.age}</InputError>}
                  </InputController>
                  <InputController>
                    <Label>Country</Label>
                    <Input type="text" name="country" onChange={handleChange} />
                    {errors?.country && <InputError>{errors.country}</InputError>}
                  </InputController>
                  <Button type="submit">Register</Button>
                  <Link to="/login">Log in</Link>
                </FormContent>
              </Form>
            )}
          </Formik>
        </Container>
      </>
    )
  }
  
export default memo(Signup)
  