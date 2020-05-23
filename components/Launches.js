import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo' 
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'

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
    return ( 
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>
          if (error) console.log(error);

          return (
            <div className="container">
              <h2>Launches</h2>
              <MissionKey />
              {data.launches.map(launch => (
                <LaunchItem key={launch.flight_number} launch={launch} />
              ))}
            </div>
          );
        }}
      </Query>
    )
  }
}

export default Launches