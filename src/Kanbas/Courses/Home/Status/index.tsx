import React from 'react';
import './status.css'; // Import the CSS file
import { FaArrowRight, FaBell, FaBullhorn, FaBullseye, FaChartBar, FaDigitalTachograph, FaFileImport } from 'react-icons/fa';

function Status() {
    return (
        <div>
            <div>
            <button className="status-button"><FaFileImport className="fs-2" /> Import Existing Content</button>
            <br />
            <button className="status-button"><FaArrowRight className="fs-2" /> Import From Commons</button>
            <br />
            <button className="status-button"><FaBullseye className="fs-2" /> Choose Home Page</button>
            <br />
            <button className="status-button"><FaChartBar className='fs-2'/> View Course Stream</button>
            <br />
            <button className="status-button"><FaBullhorn className='fs-2'/> New Announcement</button>
            <br />
            <button className="status-button"><FaChartBar className='fs-2'/> New Analytics</button>
            <br />
            <button className="status-button"><FaBell className='fs-2'/> View Course Notifications</button>
        </div>
        <div style={{ marginTop: '20px' }}>
            <h4>Todo</h4>
            <hr></hr>

        </div>
        </div>
    );
}

export default Status;
