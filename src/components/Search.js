import React, { Component } from 'react'

export class Search extends Component {

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => {
            this.props.state.dispatch({type: "SET_QUERY", query: e.target.value})
        }}/>
        <button onClick={() => {
          this.props.state.dispatch({type: "SEARCH_WIKI_REQUEST", paylaod: this.refs.inp.value})
        }}>Search</button>
      </div>
    )
  }
}