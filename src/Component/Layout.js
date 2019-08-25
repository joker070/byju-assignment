import React from 'react';
import Search from './Search';
import Result from './Result';
import {  Grid, Segment } from 'semantic-ui-react'

const Layout = () => (
    <Grid centered style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 600 }}>
        <Segment>
            <Search />
            <Result data={[]}/>
        </Segment>
    </Grid.Column>
  </Grid>
)

export default Layout