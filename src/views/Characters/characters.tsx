import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Card from '../../components/Card/card'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { Container, DashboardCards, Back, Button } from './charactersStyles'
import type { Props } from './types'
import { removeCachedChapters } from '../../services/storage/storage'
import { Categorycharacters } from '../../models/character'
import { RYMChapters } from '../../services/rym/rym'

const Characters: FC<Props> = () => {
  const navigate = useNavigate()
  const [chapter, setChapters] = useState<Categorycharacters[]>([])
  const [isloading, setIsLoading] = useState<boolean>(false)
  const [characterList, setCharacterList] = useState<Categorycharacters[]>([])

  const handleGoToCreateForm = useCallback(() => {
    navigate('/create')
  }, [navigate])

  const getCharactersList = useCallback(async () => {
    const characters = await RYMChapters()
    setCharacterList(characters)
  }, [])

  const handleGoToBack = useCallback(() => {
    navigate('/selection')
  }, [navigate])

  const handleRemove = useCallback((id: string) => {
    removeCachedChapters(id)
    setIsLoading(false)
    setChapters((prevChapters) =>
      prevChapters.filter((chapter) => chapter.id !== id)
    )
  }, [])

  useEffect(() => {
    getCharactersList()
  }, [getCharactersList])

  return (
    <Container>
      <Back onClick={handleGoToBack}>Back</Back>
      <Button onClick={handleGoToCreateForm}>New Card</Button>
      <DashboardCards>
        <Header
          onLogout={function (): void {}}
          resetCache={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
        <VideoBackground videoSrc="/realism.mp4" />
        <Card onRemove={handleRemove} />
        <Footer />
      </DashboardCards>
    </Container>
  )
}

export default memo(Characters)
