import React from 'react'
import { Input } from 'semantic-ui-react'

const InputElement = ({customClass, placeholder, onChange, value}) => 
<Input className={customClass} placeholder={placeholder} onChange={onChange} value={value} />

export default InputElement