import React from 'react'
import { Input } from 'semantic-ui-react'

// Custom Input field written keeping in mind to reuse.

const InputElement = ({customClass, placeholder, onChange, value}) => 
<Input className={customClass} placeholder={placeholder} onChange={onChange} value={value} />

export default InputElement