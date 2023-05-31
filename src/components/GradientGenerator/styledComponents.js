import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-image: linear-gradient(${props => props.gradient});
  height: 100vh;
  color: #ffffff;
`
export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const InputEl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`
export const InputTexts = styled.p`
  margin-right: 30px;
  margin-left: 30px;
`
export const InputArea = styled.input`
  margin-left: 30px;
  margin-right: 30px;
  background-color: ${props => props.bgColor};
  border: 0px solid transparent;
  padding: 1px;
`
export const Button = styled.button`
  background-color: #00c9b7;
  color: #334155;
  padding: 8px;
  border: 0px solid transparent;
  border-radius: 6px;
`
