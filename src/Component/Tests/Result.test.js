
import React from 'react'
import Result from '../Result'
import {mount} from 'enzyme'
it('renders Result Component without crashing', () => {
  mount(<Result data={[]} filterText= ''/>);
});
