import React, { Component }from 'react'
import { Grid } from 'semantic-ui-react'
import InputElement from '../Elements/Input';
import ButtonElement from '../Elements/Button';
import axios from 'axios';

export default class Search extends Component {
  
  constructor() {
    super();
    this.state = {
      repos: [],
      loading: true
    };
  } 

  performSearch = (query = 'web') => {
    axios.get(`https://api.github.com/search/repositories?q=${query}`)
      .then(response => {
        this.setState({
          query: query,
          repos: response.data.items,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }


  render() {
  return(
    <Grid className="layout_position"  columns={3}>
      <Grid.Row>
        <Grid.Column width={10}>
      <InputElement customClass="input_class" />
      </Grid.Column>
      <Grid.Column width={3}>
      <ButtonElement color="green" content="Go"/>
      </Grid.Column>
      <Grid.Column width={3}>
      <ButtonElement content="Clear" customClass="button_class"/>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={10}>
      <InputElement customClass="input_class" />
      </Grid.Column>
      <Grid.Column width={3}>
      <ButtonElement content="Clear" customClass="button_class"/>
      </Grid.Column>
      </Grid.Row>
  </Grid>
);
  }
  }