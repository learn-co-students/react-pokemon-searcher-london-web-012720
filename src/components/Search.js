import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={this.props.onChange} value={this.props.value}/>
        <i className="search icon" />
      </div>

      <fieldset className="form-group">
                <legend>Sort By</legend>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="sortedBy" id="sortBy1" value="id" checked={this.props.sortBy === 'id'} onChange={(e) => this.props.handleSort(e.target.value)}/>
                        id
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="sortedBy" id="sortBy2" value="hp" checked={this.props.sortBy === 'hp'} onChange={(e) => this.props.handleSort(e.target.value)}/>
                        hp
                    </label>
                </div>
            </fieldset>

    </div>
    )
  }
}

