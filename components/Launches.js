import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'
import { Facebook } from 'react-content-loader'

class Launches extends Component {
  constructor (props) {
    super(props)
    
    this.updateData = this.updateData.bind(this)
    this.lessData = this.lessData.bind(this)

    this.state = {
      dataAmount: 10
    }

    this.LAUNCHES_QUERY = gql `
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
  }

  updateData () {
    this.setState({ dataAmount: this.state.dataAmount + 5 })
  }

  lessData () {
    if (this.state.dataAmount > 5) {
      this.setState({ dataAmount: this.state.dataAmount - 5 })
    } else { return }
  }

  render() {
    const MyFacebookLoader = () => <Facebook
    height={200}
    speed={1}
    backgroundColor={'#333'}
    foregroundColor={'#999'}
    />

    return ( 
      <Query query={this.LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div className="container">
            <MyFacebookLoader />
          </div>
          if (error) console.log(error)

          console.log(data.launches.flight_number)
          return (
            <div className="container">
              <h2>Launches</h2>
              <MissionKey />
              {data.launches.reverse().slice(0, this.state.dataAmount).map(launch => (
                <LaunchItem key={launch.flight_number} launch={launch} />
              ))}
              <div onClick={this.updateData} className="btn btn-secondary">View More</div>
              <div onClick={this.lessData} className="btn btn-secondary ml-1">View Less</div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Launches