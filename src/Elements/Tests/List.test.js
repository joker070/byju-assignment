
import React from 'react'
import List from '../List'
import {shallow} from 'enzyme'
it('renders List Component without crashing', () => {
  shallow(<List data={[]} filterText= '' />);
});
