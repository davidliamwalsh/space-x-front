import React, { Component } from 'react'
import withData from '../lib/withData'
import Launch from '../components/Launch'
import Layout from '../components/Layout'



class launch extends Component {
  render() {

    return (
      <Layout>
        <Launch />
      </Layout>
    )
  }
}

export default withData(launch)
