import { FC, memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Card from '../../components/Card/card';
import VideoBackground from '../../components/VideoBackground/videoBackground';
import { Container, DashboardCards, Back } from './charactersStyles';
import type { Props } from './types';
import { removeCachedChapters } from '../../services/storage/storage';
import { Categorycharacters } from '../../models/character';

const Characters: FC<Props> = () => {
  const navigate = useNavigate();
  const [chapter, setChapters] = useState<Categorycharacters[]>([]);

  const handleGoToBack = useCallback(() => {
    navigate('/selection');
  }, [navigate]);

  const handleRemove = useCallback((chapter: Categorycharacters) => {
    const newList = removeCachedChapters(chapter)
    setChapters(newList)
  }, [])

  return (
    <Container>
      <Back onClick={handleGoToBack}>Back</Back>
      <DashboardCards>
        <Header onLogout={function (): void { } } resetCache={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <VideoBackground videoSrc="/realism.mp4" />
        {/* {chapter.map((chapter) => (
                <Card key={chapter.id} chapter={chapter} onRemove={handleRemove} />
              ))}         */}
        <Card key={chapter} chapter={chapter} onRemove={handleRemove} />
        <Footer/>
      </DashboardCards>
    </Container>
  );
};

export default memo(Characters);