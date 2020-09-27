import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'

const StyledContainer = styled(Container)`
  width: 420px;
  display: inline-block;
  margin-right: 30px;
  vertical-align: top;
`

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

const StyledCharacters = styled.div`
  width: 850px;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
`

const StyledContent = styled.div`
  width: 370px;
  display: inline-block;
  padding-left: 20px;
`

const Characters = () =>
  <StyledCharacters>
    <StyledContainer fluid={false}>
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
    </StyledContainer>
    <StyledContent>
        <StyledTitle>Des aventuriers lancés dans l'univers Role n Play ! </StyledTitle>
        <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor id elit ac ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ullamcorper accumsan. </StyledDescription>
    </StyledContent>
  </StyledCharacters>

export default Characters
