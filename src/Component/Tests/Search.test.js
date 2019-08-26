
import React from 'react'
import Search from '../Search'
import {mount} from 'enzyme'
it('renders Search Component without crashing', () => {
  mount(<Search setRepos={() => {}} setFilterText={() => {}}/>);
});
