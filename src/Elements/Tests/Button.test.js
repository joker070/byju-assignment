
import React from 'react'
import Button from '../Button'
import {shallow} from 'enzyme'
it('renders Button Component without crashing', () => {
  shallow(<Button />);
});
