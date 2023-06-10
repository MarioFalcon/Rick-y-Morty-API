import {FC, memo} from 'react'

import Header from '../../components/Header/header'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import {
  DashboardContainer,
  DashboardContent,
  DashboardCards,
} from './dashboardStyles'


const Dashboard: FC = () => {

  return (

    <DashboardContainer>
    <Header/>
      <VideoBackground videoSrc="/blue.mp4" />

      <DashboardContent>
        <DashboardCards>
          
        </DashboardCards>
      </DashboardContent>

      </DashboardContainer>
  )

}







export default memo(Dashboard)