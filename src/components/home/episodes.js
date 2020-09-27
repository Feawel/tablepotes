import React from 'react'
import styled from 'styled-components'
import { LIGHT_BACKGROUND_COLOR, mediaMobile, mediaPhablet } from 'utils/style'
import { Container, Row, Col } from 'react-grid-system'
import MediaCard from './mediaCard'

const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 100;
`
const StyledDescription = styled.h1`
  font-size: 16px;
  font-weight: 400;
`

const StyledBackground = styled.div`
  background-color: ${LIGHT_BACKGROUND_COLOR};
  padding-top: 40px;
  padding-bottom: 40px;
`

const StyledContent = styled.div`
  ${mediaMobile('text-align: center;margin-bottom: 30px;')}
  ${mediaPhablet('text-align: center;margin-bottom: 30px;')}
`

const Episodes = () =>
  <StyledBackground>
    <Container>
      <Row justify="center" align="center">
        <Col xs={12} sm={8} md={3} lg={4} >
          <StyledContent>
            <StyledTitle>Des épisodes déjà disponibles </StyledTitle>
            <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor id elit ac ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ullamcorper accumsan. </StyledDescription>
          </StyledContent>
        </Col>
        <Col xs={12} sm={12} md={9} lg={6} offset={{ lg: 1 }}>
          <Container>
            <Row justify="center" align="center" gutterWidth={30}>
              <Col xs={6} sm={6} md={6} lg={6}>
              <MediaCard title={'Sombre héritage'} subtitle={'Saison 1 - épisode 1'} />
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
              <MediaCard title={'Le Baron Rouge'} subtitle={'Saison 1 - épisode 2'} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </StyledBackground>

export default Episodes
