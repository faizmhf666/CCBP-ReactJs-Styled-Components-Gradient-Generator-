import styled from 'styled-components'

export const Button = styled.button`
  color: ${props => (props.isActive ? '#1e293b' : '#334155')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  background-color: #ffffff;
  padding: 10px;
  border: 0px solid transparent;
  margin-right: 5px;
`
export const List = styled.li`
  list-style: none;
  margin-right: 10px;
`
