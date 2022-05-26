import React from 'react'
import { MainWrapper, GlassWrapper } from './Home.styles'
import SideBar from '../../Layouts/SideBar/SideBar'
import MainDash from '../../Layouts/MainDash/MainDash'



const Home = () => {
  return (
    <>
      <MainWrapper>
        <GlassWrapper>
          <SideBar />
          <MainDash />
        </GlassWrapper>
      </MainWrapper>
    </>
  )
}

export default Home