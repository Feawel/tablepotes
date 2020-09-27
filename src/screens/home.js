import React from 'react'
import { useFetch } from 'hooks/fetch'
import { SCREEN_HOME } from 'constants/index.js'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import {
  LIGHT_BACKGROUND_COLOR,
  styledPurpleBackgroundButton,
  mediaMobile,
  mediaPhablet
} from 'utils/style'

import Metas from 'components/metas'
import Button from '@material-ui/core/Button'
import Characters from 'components/home/characters'
import Episodes from 'components/home/episodes'

const StyledTitle = styled.h1`
  font-size: 48px;
  font-weight: 100;
`

const StyledPaperButton = styled(Button)`
  && {
    text-transform: uppercase;
    ${styledPurpleBackgroundButton}
  margin-right: 20px;
    font-weight: bold;
    padding: 10px 25px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`

const StyledBanner = styled.div`
  background-color: ${LIGHT_BACKGROUND_COLOR};
  height: 180px;
  width: 100%;
  text-align: center;
  ${mediaPhablet('height: 300px;')}
  ${mediaMobile('height: 450px;')}
`

const StyledBbe = styled.img`
  height: 90px;
  margin-top: 50px;
`

const StyledHeros = styled.img`
  height: 70px;
  margin-top: 60px;
`

const StyledAudio = styled.img`
  height: 50px;
  margin-top: 75px;
`


const HomeScreen = () => {
  useFetch({ screen: SCREEN_HOME })

  return (
    <>
      <Metas screen={SCREEN_HOME} />
      <Container>
        <Row justify="center" align="center" gutterWidth={50}>
          <Col sm={10} md={8} lg={6}>
            <StyledTitle>TablePotes : une table, des potes et du JDR ! </StyledTitle>
            <StyledPaperButton>Découvrir</StyledPaperButton>
          </Col>
          <Col sm={10} md={8} lg={6}>
            <iframe title="youtube video episode 0" style={{ marginTop: 40, maxWidth: "90%" }} width="560" height="315" src="https://www.youtube.com/embed/S9Ngt8OJU1A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
          </Col>
        </Row>
      </Container>
      <StyledBanner>
        <Container>
          <Row justify="center" align="center">
            <Col xs={12} sm={4} md={3}>
              <StyledBbe src="/img/home/blackbook-logo.png" />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <StyledHeros src="/img/home/herosdragons-logo2.png" />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <StyledAudio src="/img/home/tabletopaudio-logo2.png" />
            </Col>
          </Row>
        </Container>
      </StyledBanner>
      <Characters />
      <Episodes />
    </>
  )
}

// For SSR when ready
// HomeScreen.getInitialProps = async dispatch => {
//   await fetch({ dispatch, screen: SCREEN_HOME })
// }

export default HomeScreen
