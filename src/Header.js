import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasksAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({empty}) => {

  return (
    <div>
        <div className="header-section">
            <h1>
              <FontAwesomeIcon icon={faTasksAlt} className='task-icon' />
              TaskHarbor
            </h1>
            {empty && <div className="error-message">
              <p>Add Something.</p>
            </div>}
        </div>
    </div>
  )
}

export default Header