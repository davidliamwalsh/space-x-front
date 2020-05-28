import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo' 
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'
import { Facebook } from 'react-content-loader'

const LAUNCHES_QUERY = gql `
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`

export class Launches extends Component {
  render() {
    const MyFacebookLoader = () => <Facebook
    height={200}
    speed={1}
    backgroundColor={'#333'}
    foregroundColor={'#999'}
    />

    return ( 
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div className="container">
            <MyFacebookLoader />
          </div>
          if (error) console.log(error)

          return (
            <div className="container">
              <h2>Launches</h2>
              <MissionKey />
              {data.launches.map(launch => (
                <LaunchItem key={launch.flight_number} launch={launch} />
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Launches