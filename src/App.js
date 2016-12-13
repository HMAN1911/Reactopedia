import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchWikiAction } from './actions/wikiActions'
import { Search } from './components/Search'

export class App extends Component {

  render() {
    return (
      <Search state={this.props} />
    )
  }
}

const mapStateToProps = ({ query, articles }) => ({
  query: query,
  articles: articles
})

export default connect(mapStateToProps)(App)
