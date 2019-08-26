import React from 'react'
import { Grid } from 'semantic-ui-react'
import ListElement from '../Elements/List';
import NoData from './NoData';

// renders the repos in the form of list.

const Result = ({data, filterText}) => {
    return(
        data.length > 0 ?
    <Grid>
      <Grid.Row className="layout_position_row">
            <Grid.Column className="layout_position_column">
                    <ListElement data={data} filterText={filterText} />
            </Grid.Column>
      </Grid.Row>
  </Grid> :
  <NoData />
);
}

export default Result