import React from 'react'
import { List } from 'semantic-ui-react'

const data = ['1', '2', '3', '4'];
const ListElement = () => (
  <List divided verticalAlign="middle" className="listContent">
      {data.map(i => {
          return (
            <List.Item>
            <List.Content className="listContent">
              {i}
            </List.Content>
          </List.Item> 
          )
      })}
  </List>
)

export default ListElement