
import React from 'react'
import NoData from '../NoData'
import {mount} from 'enzyme'
it('renders NoData Component without crashing', () => {
  mount(<NoData />);
});
