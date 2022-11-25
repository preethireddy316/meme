// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${props => props.activeFontId};
  text-align: center;
  background-image: url(${props => props.imgUrl});
  width: 50%;
`
