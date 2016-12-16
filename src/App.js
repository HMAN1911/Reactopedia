import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchWikiAction, setQueryAction } from './actions/wikiActions'
import { Search } from './components/Search'

export class App extends Component {
  constructor() {
    super()
    this.handleSetQuery = this.handleSetQuery.bind(this)
    this.handleSearchWiki = this.handleSearchWiki.bind(this)
  }

  handleSetQuery(value) {
    this.props.dispatch(setQueryAction(value))
  }

  handleSearchWiki() {
    this.props.dispatch(searchWikiAction(this.props.query))
  }

  render() {
    return (
      <Search setQuery={this.handleSetQuery} 
              searchWiki={this.handleSearchWiki} />
    )
  }
}

const mapStateToProps = ({ query, articles }) => ({
  query: query,
  articles: articles
})

export default connect(mapStateToProps)(App)
