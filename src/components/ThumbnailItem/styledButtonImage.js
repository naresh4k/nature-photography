import styled from 'styled-components'

const StyledButtonImage = styled.img`
  width: 60px;
  height: 60px;
  opacity: ${props => (props.active ? '1.0' : '0.5')};
`

export default StyledButtonImage
