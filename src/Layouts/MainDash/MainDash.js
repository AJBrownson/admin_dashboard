import React from 'react'
import Card from '../../Components/Card/Card'
import { MainDashWrapper } from './MainDash.styles'


const MainDash = () => {
  return (
    <>
        <MainDashWrapper>
            <h1>Dashboard</h1>
            <Card />
        </MainDashWrapper>
    </>
  )
}

export default MainDash