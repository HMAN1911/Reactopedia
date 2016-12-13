import React, { Component } from 'react'

export class Search extends Component {

  render() {
    return (
      <div>
        <input ref="inp" type="text" onChange={() => {
            this.props.state.dispatch({type: "SET_QUERY", query: this.refs.inp.value})
        }}/>
        <button onClick={() => {
          this.props.state.dispatch({type: "SEARCH_WIKI_REQUEST", paylaod: this.refs.inp.value})
        }}>Search</button>
      </div>
    )
  }
}