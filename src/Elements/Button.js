import React from 'react'
import { Button } from 'semantic-ui-react'

// Custom Button written keeping in mind to reuse.

const ButtonElement = ({color, size, customClass, content, onClick, disabled}) => (
  <div>
    <Button disabled={disabled} color={color} size={size} className={customClass} onClick={onClick} ><Button.Content>{content}</Button.Content></Button>
  </div>
)

export default ButtonElement