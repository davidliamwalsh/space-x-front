import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Layout from '../components/Layout'
import Launches from '../components/Launches'

const client = new ApolloClient({
  uri: 'https://space-x-back.herokuapp.com/graphql'
})

export class index extends Component {
  render() {
    return (
      <Layout>
        <ApolloProvider client={client}>
          <Launches />
        </ApolloProvider>
      </Layout>
    )
  }
}

export default index
