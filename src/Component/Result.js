import React from 'react'
import { Grid } from 'semantic-ui-react'
import ListElement from '../Elements/List';
const Result = ({data}) => (
    data.length > 0 ? 
    <Grid>
      <Grid.Row className="layout_position_row">
            <Grid.Column className="layout_position_column">
                    <ListElement/>
            </Grid.Column>
      </Grid.Row>
  </Grid>
    :  
<ul className='no-repos'>
    <h3>Sorry, no Repos match your search.</h3>
</ul>
)

export default Result