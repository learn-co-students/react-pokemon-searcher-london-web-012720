import React from 'react'
import { Form } from 'semantic-ui-react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.onChange} />
        <i className="search icon" />
      </div><br></br>
      <Form.Button onClick={props.sortBy}>Sort by Health</Form.Button>
    </div>
  )
}

export default Search
