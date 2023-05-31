import {Button, List} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionItemList, isActive, onChangeDirection} = props
  const {displayText, value, directionId} = gradientDirectionItemList

  const onButtonClick = () => {
    onChangeDirection(directionId)
  }

  return (
    <List>
      <Button
        type="button"
        value={value}
        onClick={onButtonClick}
        isActive={isActive}
      >
        {displayText}
      </Button>
    </List>
  )
}
export default GradientDirectionItem
