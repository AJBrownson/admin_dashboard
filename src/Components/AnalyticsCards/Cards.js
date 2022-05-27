import React from 'react'
import { CardsData } from '../../Utils/Data.js'
import { Cardss, Container } from './Cards.styles.js'
import { Card } from '../Card/Card'



const Cards = () => {
  return (
      <Cardss>
          {
              CardsData.map((card, index)=> {
                  return (
                      <Container>
                          <Card
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                          />
                      </Container>
                  )
              })
          }
      </Cardss>
  )
}

export default Cards