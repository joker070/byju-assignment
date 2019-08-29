import React from 'react'
import { Input } from 'semantic-ui-react'

// Custom Input field written keeping in mind to reuse.

const InputElement = ({customClass, placeholder, onChange, value, disabled}) => 
<Input className={customClass} placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} />

export default InputElement