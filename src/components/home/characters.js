import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import { mediaMobile } from 'utils/style'

const StyledCharacter = styled.img`
  width: 120px;
  margin-top: 20px;
  border-radius: 3px;
  vertical-align: top;
`

const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 100;
`
const StyledDescription = styled.h1`
  font-size: 16px;
  font-weight: 400;
`

const StyledContent = styled.div`
  ${mediaMobile('text-align: center;')}
`

const StyledCharacters = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`

const Characters = () =>
  <StyledCharacters>
    <Container>
      <Row justify="center" align="center">
        <Col xs={12} sm={7} md={7} lg={5} >
          <Container>
            <Row justify="start" align="center" gutterWidth={10}>
              <Col xs={4}>
                <StyledCharacter src="/img/home/characters1.jpeg" />
              </Col>
              <Col xs={4}>
                <StyledCharacter src="/img/home/characters2.jpeg" />
              </Col>
              <Col xs={4}>
                <StyledCharacter src="/img/home/characters3.jpeg" />
              </Col>
              <Col xs={4}>
                <StyledCharacter src="/img/home/characters4.jpeg" />
              </Col>
              <Col xs={4}>
                <StyledCharacter src="/img/home/characters5.jpeg" />
              </Col>
              <Col xs={4}>
                <StyledCharacter src="/img/home/characters6.jpeg" />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} sm={4} md={4} lg={5} offset={{ sm: 1, md: 1, lg: 2 }}>
          <StyledContent>
              <StyledTitle>Des aventuriers lancés dans l'univers Role n Play ! </StyledTitle>
              <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor id elit ac ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ullamcorper accumsan. </StyledDescription>
          </StyledContent>
        </Col>
      </Row>
    </Container>
  </StyledCharacters>

export default Characters
