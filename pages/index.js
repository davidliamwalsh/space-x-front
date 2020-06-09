import React, { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import Launches from '../components/Launches'

export class index extends Component {
  render() {
    return (
      <Layout>
        <Launches />
      </Layout>
    )
  }
}

export default withData(index)
