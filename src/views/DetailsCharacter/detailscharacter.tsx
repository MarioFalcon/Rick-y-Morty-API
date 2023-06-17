import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsSpecies,
  ButtonContainer,
  Buttonfavorito,
  Buttoneditar,
  Image,
  ImageContainer,
} from './detailscharacterStyles'
import Footer from '../../components/Footer/footer'
import { RYMChapters } from '../../services/rym/rym'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { Categorycharacters } from '../../models/character'

const DetailsCharacter: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [chapter, setChapter] = useState<Categorycharacters | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const chaptersData = await RYMChapters()
      const selectedChapter = chaptersData.find(
        (chapter) => typeof id === 'string' && chapter.id === parseInt(id)
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
        {chapter && (
          <>
            <DetailsTitle>{chapter.name}</DetailsTitle>
            <ImageContainer>
              <Image src={chapter.image} />
            </ImageContainer>
            <DetailsSpecies>
              <b>
                This character is a {chapter.species}, is in a{' '}
                <b>{chapter.status}</b> state.
              </b>
            </DetailsSpecies>
          </>
        )}
        <ButtonContainer>
          <Buttonfavorito onClick={handleGoBack}>Back</Buttonfavorito>
          <Buttoneditar>Edit</Buttoneditar>
        </ButtonContainer>
      </DetailsContent>
      <Footer />
    </DetailsContainer>
  )
}

export default memo(DetailsCharacter)
