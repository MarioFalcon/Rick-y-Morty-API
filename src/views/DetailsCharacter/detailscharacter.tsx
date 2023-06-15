import { FC, memo, useCallback, useEffect, useState } from 'react'
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsExplanation,
  ButtonContainer,
  Buttonfavorito,
  Buttoneditar,
  Buttoneliminar,
  Image,
  ImageContainer,
 
} from './detailscharacterStyles'

import Footer from '../../components/Footer/footer'
import { useNavigate, useParams } from 'react-router-dom'
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
      const selectedChapter = chaptersData.find((chapter) => chapter.id === id)
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
        <ButtonContainer>
          <Buttonfavorito onClick={handleGoBack}>Back</Buttonfavorito>
          <Buttoneditar>Edit</Buttoneditar>
          <Buttonfavorito>Favorites</Buttonfavorito>
          <Buttoneliminar>Delete</Buttoneliminar>
        </ButtonContainer>
        {chapter && (
          <>
            <ImageContainer>
              <Image src={chapter.image} />
            </ImageContainer>
            <DetailsTitle>{chapter.name}</DetailsTitle>
            <DetailsExplanation></DetailsExplanation>
          </>
        )}
      </DetailsContent>
      <Footer />
    </DetailsContainer>
  )
}

export default memo(DetailsCharacter)