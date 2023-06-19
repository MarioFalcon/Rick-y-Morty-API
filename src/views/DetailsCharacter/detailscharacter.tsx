import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsSpecies,
  ButtonContainer,
  ButtonBack,
  Buttoneditar,
  Image,
  ImageContainer,
  Bold,
} from './detailscharacterStyles'
import Footer from '../../components/Footer/footer'
import { RYMChapters } from '../../services/rym/rym'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { Categorycharacters } from '../../models/character'
import EditionForm from './EditionForm/EditionForm'

const DetailsCharacter: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [chapter, setChapter] = useState<Categorycharacters | null>(null)
  const [isEdit, setIsEdit] = useState(false)

  const handleToggleEdition = useCallback(() => {
    setIsEdit((prev) => !prev)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const chaptersData = await RYMChapters()
      const selectedChapter = chaptersData.find(
        (chapter) =>
          typeof id === 'string' &&
          parseInt(chapter.id, 10) === parseInt(id, 10)
      )
      setChapter(selectedChapter || null)
    }

    fetchData()
  }, [id])

  const handleGoBack = useCallback(() => {
    navigate('/characters')
  }, [navigate])

  return (
    <DetailsContainer>
      <VideoBackground videoSrc="/realism.mp4" />
      <DetailsContent>
        {chapter && !isEdit && (
          <>
            <DetailsTitle>{chapter.name}</DetailsTitle>
            <ImageContainer>
              <Image src={chapter.image} />
            </ImageContainer>
            <DetailsSpecies>
              This character is a {chapter.species}, is in a{' '}
              <Bold>{chapter.status}</Bold> state.
            </DetailsSpecies>
          </>
        )}

        {chapter && isEdit && (
          <EditionForm onCancel={handleToggleEdition} character={chapter} />
        )}
        <ButtonContainer>
          <ButtonBack onClick={handleGoBack}>Back</ButtonBack>
          <Buttoneditar onClick={handleToggleEdition}>Edit</Buttoneditar>
        </ButtonContainer>
      </DetailsContent>
      <Footer />
    </DetailsContainer>
  )
}

export default memo(DetailsCharacter)
