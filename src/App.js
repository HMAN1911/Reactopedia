import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchWikiAction, setQueryAction } from './actions/wikiActions'
import { Search } from './components/Search'
import { LoadingIndicator } from './components/LoadingIndicator'

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
    console.log(this.props)
    return (
      <div>
        <Search setQuery={this.handleSetQuery} searchWiki={this.handleSearchWiki} />
        <LoadingIndicator loading={ this.props.loading }/>
      </div>
    )
  }
}

const mapStateToProps = ({ query, articles, loading }) => ({
  query, articles, loading
})

export default connect(mapStateToProps)(App)
