import React from 'react'
import { MainWrapper, GlassWrapper } from './Home.styles'
import SideBar from '../../Layouts/SideBar/SideBar'

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