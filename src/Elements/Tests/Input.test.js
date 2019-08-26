
import React from 'react'
import Input from '../Input'
import {shallow} from 'enzyme'
it('renders Input Component without crashing', () => {
  shallow(<Input />);
});
