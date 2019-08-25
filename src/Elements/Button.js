import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonElement = ({color, size, customClass, content}) => (
  <div>
    <Button color={color} size={size} className={customClass}><Button.Content>{content}</Button.Content></Button>
  </div>
)

export default ButtonElement