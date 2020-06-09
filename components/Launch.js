import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withRouter } from 'next/router'
import classNames from 'classnames'
import Link from 'next/link'
import { Facebook } from 'react-content-loader'

class Launch extends Component {

  constructor (props) {
    super(props)

    this.LAUNCH_QUERY = gql`
      query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
          flight_number
          mission_name
          launch_year
          launch_success
          launch_date_local
          rocket {
            rocket_id
            rocket_name
            rocket_type
          }
        }
      }
    `
  }

  render () {
    let flight_number = this.props.router.query.flight_number
    flight_number = parseInt(flight_number)

    const MyFacebookLoader = () => <Facebook
    height={200}
    speed={1}
    backgroundColor={'#333'}
    foregroundColor={'#999'}
    />

    return (
      <Query query={this.LAUNCH_QUERY} variables={{flight_number}}>
        {({ loading, error, data }) => {
          if (loading) return <div className="container">
            <MyFacebookLoader />
          </div>
          if (error) console.log(error)
  
          const {
            mission_name,
            flight_number,
            launch_year,
            launch_success,
            rocket: { rocket_id, rocket_name, rocket_type }
          } = data.launch

          return (
            <div className="container">
              <h1 className="display-4 my-3">
                <span className="text-dark">Mission:</span> {mission_name}
              </h1>
              <h4 className="mb-3">Launch Details</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  Flight Number: {flight_number}
                </li>
                <li className="list-group-item">
                  Launch Year: {launch_year}
                </li>
                <li className="list-group-item">
                  Launch Successful:{' '}
                  <span
                    className={classNames({
                      'text-success': launch_success,
                      'text-danger': !launch_success
                    })}
                  >
                    {launch_success ? 'Yes' : 'No'}
                  </span>
                </li>
              </ul>

              <h4 className="my-3">Rocket Details</h4>
              <ul className="list-group">
                <li className="list-group-item">Rocket ID: {rocket_id}</li>
                <li className="list-group-item">
                  Rocket Name: {rocket_name}
                </li>
                <li className="list-group-item">
                  Rocket Type: {rocket_type}
                </li>
              </ul>
              <hr />
              <Link href="/">
                <a className="btn btn-secondary">
                  Back
                </a>
              </Link>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default withRouter(Launch)