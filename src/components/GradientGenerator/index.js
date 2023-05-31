import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  ListContainer,
  Form,
  InputEl,
  InputTexts,
  InputArea,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

export default class GradientGenerator extends Component {
  state = {
    activeId: gradientDirectionsList[0].directionId,
    firstColor: '#8ae323',
    secondColor: '#014f7b ',
  }

  onChangeDirection = directionId => {
    this.setState({activeId: directionId})
  }

  onChangeSecondColor = e => {
    this.setState({secondColor: e.target.value})
  }

  onChangeFirstColor = e => {
    this.setState({firstColor: e.target.value})
  }

  onGenerateGradient = e => {
    e.preventDefault()
    this.setState({firstColor: e.target.value, secondColor: e.target.value})
  }

  render() {
    const {activeId, secondColor, firstColor} = this.state
    const direction = gradientDirectionsList.filter(
      each => each.directionId === activeId,
    )[0].value
    const gradientValue = `to ${direction}, ${firstColor}, ${secondColor}`

    return (
      <MainContainer data-testid="gradientGenerator" gradient={gradientValue}>
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose direction</p>
        <ListContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              gradientDirectionItemList={each}
              key={each.directionId}
              onChangeDirection={this.onChangeDirection}
              isActive={each.directionId === activeId}
            />
          ))}
        </ListContainer>
        <p>Pick the Colors</p>
        <Form onSubmit={this.onGenerateGradient}>
          <InputEl>
            <InputTexts>{firstColor}</InputTexts>
            <InputTexts>{secondColor}</InputTexts>
          </InputEl>
          <InputEl>
            <InputArea
              type="color"
              id="first"
              onChange={this.onChangeFirstColor}
              value={firstColor}
              bgColor={firstColor}
            />
            <InputArea
              type="color"
              id="second"
              onChange={this.onChangeSecondColor}
              value={secondColor}
              bgColor={secondColor}
            />
          </InputEl>
        </Form>
        <Button type="submit">Generate</Button>
      </MainContainer>
    )
  }
}
