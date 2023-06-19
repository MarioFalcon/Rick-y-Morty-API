import { FC, memo, useCallback } from 'react'
import {
  Button,
  Container,
  Form,
  Input,
  InputController,
  Label,
  ButtonContainer,
  Back,
} from './createFormStyles'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constants'
import useLogic from './logic'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { useNavigate } from 'react-router-dom'

const CreateForm: FC = () => {
  const { handleCreate } = useLogic()
  const navigate = useNavigate()

  const handleGoToBack = useCallback(() => {
    navigate('/characters')
  }, [navigate])

  return (
    <Container>
      <Back onClick={handleGoToBack}>Back</Back>
      <VideoBackground videoSrc="/realism.mp4" />
      <ButtonContainer></ButtonContainer>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleCreate}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <InputController>
              <Label>Name</Label>
              <Input
                type="text"
                name="title"
                onChange={handleChange}
                value={values.name}
              />
            </InputController>
            <InputController>
              <Label>Species</Label>
              <Input
                type="text"
                name="explanation"
                onChange={handleChange}
                value={values.species}
              />
            </InputController>

            <InputController>
              <Label>Status</Label>
              <Input
                type="text"
                name="explanation"
                onChange={handleChange}
                value={values.status}
              />
            </InputController>

            <Button type="submit">Create Characters</Button>
          </Form>
        )}
      </Formik>
      <Footer />
    </Container>
  )
}

export default memo(CreateForm)
