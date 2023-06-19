import { FC, memo, useMemo } from 'react'
import { Formik } from 'formik'
import {
  Container,
  Form,
  Input,
  InputController,
  Label,
  Back,
  Error,
} from './styles'
import { ValidationSchema } from './constants'
import useLogic from './logic'
import type { Props } from './types'

const EditionForm: FC<Props> = ({ onCancel, character }) => {
  const { handleOnEdit } = useLogic()

  const InitialValues = useMemo(
    () => ({
      name: character.name || '',
      species: character.species || '',
      status: character.status || '',
    }),
    [character]
  )

  return (
    <Container>
      <Back onClick={onCancel}>Cancel</Back>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleOnEdit}
      >
        {({ handleSubmit, handleChange, values, errors, isValid }) => (
          <Form onSubmit={handleSubmit}>
            <InputController>
              <Label $hasError={!!errors?.name}>Name</Label>
              <Input
                $hasError={!!errors?.name}
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              {errors?.name && <Error>{errors?.name}</Error>}
            </InputController>
            <InputController>
              <Label $hasError={!!errors?.species}>Species</Label>
              <Input
                $hasError={!!errors?.species}
                type="text"
                name="species"
                onChange={handleChange}
                value={values.species}
              />
              {errors?.species && <Error>{errors?.species}</Error>}
            </InputController>

            <InputController>
              <Label $hasError={!!errors?.status}>Status</Label>
              <Input
                $hasError={!!errors?.status}
                type="text"
                name="status"
                onChange={handleChange}
                value={values.status}
              />
              {errors?.status && <Error>{errors?.status}</Error>}
            </InputController>

            <button type="submit" disabled={!isValid}>
              Edit {character.name}
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(EditionForm)
