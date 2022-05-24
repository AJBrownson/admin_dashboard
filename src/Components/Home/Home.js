import React from 'react'
import { MainWrapper, GlassWrapper } from './Home.styles'
import SideBar from '../SideBar/SideBar'

const Home = () => {
  return (
    <>
      <MainWrapper>
        <GlassWrapper>
          <SideBar />
        </GlassWrapper>
      </MainWrapper>
    </>
  )
}

export default Home