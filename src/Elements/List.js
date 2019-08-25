import React from 'react'
import { List } from 'semantic-ui-react'

const ListElement = ({data, filterText}) => {
    const class_style = data.length === 1 && filterText ? 'highlight_text' : '';
return (
  <List divided verticalAlign="middle" className="listContent list_style">
      {data.map((element) => {
          return (
            <List.Item key={element}>
            <List.Content className={`listContent ${class_style}`}> 
              {element}
            </List.Content>
          </List.Item> 
          )
      })}
  </List>
);
}
export default ListElement