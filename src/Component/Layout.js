import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';
import {  Grid, Segment } from 'semantic-ui-react'

export default class Layout extends Component {

  constructor() {
    super();
    this.state = {
      reposList: [],
      filterText: '',
    };
  } 

 repos = (data) => {
  this.setState({reposList: data})
}

setFilterText = (filterText) => {
  this.setState({filterText})
}

  render() {
    const {reposList, filterText} = this.state;
  return(
    <Grid centered style={{ height: '100vh' }}>
    <Grid.Column style={{ maxWidth: 600, maxHeight: 500 }} className="layout">
        <Segment>
            <Search setRepos={this.repos} setFilterText={this.setFilterText} />
            <Result data={reposList} filterText={filterText} />
        </Segment>
    </Grid.Column>
  </Grid>
);
}
}