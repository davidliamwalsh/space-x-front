import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import classNames from 'classnames';
import Launch from '../components/Launch'
import Layout from '../components/Layout'

const client = new ApolloClient({
  uri: 'https://space-x-back.herokuapp.com/graphql'
})

export class launch extends Component {
  render() {

    return (
      <Layout>
        <ApolloProvider client={client}>
          <Launch />
        </ApolloProvider>
      </Layout>
    )
  }
}

export default launch
