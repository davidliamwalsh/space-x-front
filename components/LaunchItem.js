import React from 'react'
import classNames from 'classnames';
import moment from 'moment'
import Link from 'next/link'

export default function LaunchItem({ launch: { flight_number, mission_name, launch_year, launch_date_local, launch_success } }) {

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission Name: <span className={classNames({
              'text-success': launch_success,
              'text-danger': !launch_success
            })}>{mission_name}</span>
          </h4>
          <p>Launch Date: {moment(launch_date_local).format('LLLL')}</p>
        </div>
        <div className="col-md-3">
          <Link href={`/launch?flight_number=${flight_number}`} as={`/launch/${flight_number}`}>
            <a className="btn btn-secondary">
              Launch Details
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}