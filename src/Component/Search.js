import React, { Component }from 'react'
import { Dimmer, Loader, Grid } from 'semantic-ui-react'
import InputElement from '../Elements/Input';
import ButtonElement from '../Elements/Button';
import axios from 'axios';

export default class Search extends Component {
  
  constructor() {
    super();
    this.state = {
      repos: [],
      loading: false,
      searchText: '',
      filterText: '',
    };
  } 

  performSearch = (searchText = 'web') => {
    const {setRepos} = this.props;
    axios.get(`https://api.github.com/users/${searchText}/repos`, { headers: {'Accept': 'application/vnd.github.v3+json'}})
      .then(response => {
        let reposList = [];
        if(response && response.data){
          reposList = response.data.map(data => data.name);
        } else {
          reposList = [];
        }
        this.setState({
          repos: reposList,
          loading: false
        }, () => {
          setRepos(reposList);
        });
      })
      .catch(error => {
        this.setState({
          repos: [],
          loading: false
        }, () => {
          setRepos([]);
        });
      })  
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  onFilterTextChange = e => {
    e.preventDefault();
    const {repos} = this.state;
    const {setRepos, setFilterText} = this.props;
    setFilterText(e.target.value);
    const filterData  = repos.filter((d)=>{
      return d.indexOf(e.target.value) !== -1 
    });
    this.setState({ filterText: e.target.value }, () => {
      setRepos(filterData);
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {searchText} = this.state;
    this.setState({loading: true} , () => {
      this.performSearch(searchText);
    });  
  }

  clearSearchText = e => {
    const {setRepos} = this.props;
    this.setState({ searchText: ''}, () => {
      setRepos([]);
    });
  }

  clearFilterText = e => {
    e.preventDefault();
    const {repos} = this.state;
    const {setRepos, setFilterText} = this.props;
    this.setState({ filterText: ''}, () => {
      setRepos(repos);
      setFilterText('');
    });
  }

  render() {
  const {searchText, loading, filterText} = this.state;
  return(
    <Grid className="layout_position"  columns={3}>
      <Dimmer active={loading} inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <Grid.Row>
        <Grid.Column width={10}>
      <InputElement customClass="input_class" placeholder="Search" onChange={this.onSearchChange} value={searchText} />
      </Grid.Column>
      <Grid.Column width={3}>
      <ButtonElement color="green" content="Go" onClick={this.handleSubmit} />
      </Grid.Column>
      <Grid.Column width={3}>
      <ButtonElement content="Clear" customClass="button_class" onClick={this.clearSearchText}/>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={10}>
      <InputElement customClass="input_class"  placeholder="Enter some keywords to filter Eg : algo"  onChange={this.onFilterTextChange} value={filterText}/>
      </Grid.Column>
      <Grid.Column width={3}>
      <ButtonElement content="Clear" customClass="button_class" onClick={this.clearFilterText} />
      </Grid.Column>
      </Grid.Row>
  </Grid>
);
  }
  }