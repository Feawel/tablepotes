import React from 'react'
import styled from 'styled-components'
import { LIGHT_BACKGROUND_COLOR, mediaMax } from 'utils/style'
import MediaCard from './mediaCard'

const StyledEpisode = styled.div`
  width: 400px;
  display: inline-block;
  vertical-align: top;
  margin-right: 30px;
  ${mediaMax({ max: 960, style: `display: block; margin: auto; margin-top: 30px;` })}
`

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
  padding-top: 80px;
  padding-bottom: 80px;
  ${mediaMax({ max: 960, style: `padding-top: 20px; padding-bottom: 20px;` })}
`

const StyledEpisodes = styled.div`
  margin: auto;
`

const StyledContent = styled.div`
  width: 370px;
  display: inline-block;
  padding-left: 20px;
  padding-right: 30px;
  ${mediaMax({ max: 960, style: `display: block; margin: auto; text-align: center;` })}
`

const Episodes = () =>
  <StyledBackground>
    <StyledEpisodes>
      <StyledContent>
        <StyledTitle>Des épisodes déjà disponibles </StyledTitle>
        <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor id elit ac ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ullamcorper accumsan. </StyledDescription>
      </StyledContent>
      <StyledEpisode>
        <MediaCard title={'Sombre héritage'} subtitle={'Saison 1 - épisode 1'} />
      </StyledEpisode>
      <StyledEpisode>
        <MediaCard title={'Le Baron Rouge'} subtitle={'Saison 1 - épisode 2'} />
      </StyledEpisode>
    </StyledEpisodes>
  </StyledBackground>

export default Episodes
