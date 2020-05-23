import React from 'react'
import classNames from 'classnames';

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
          <p>Launch Date: {launch_date_local}</p>
        </div>
        <div className="col-md-3">
          <a href={`/launch/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </a>
        </div>
      </div>
    </div>
  )
}