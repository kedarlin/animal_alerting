import Sidebar from '../../components/Sidebar/Sidebar';
import './Alerts.css';
import React from 'react';


const Alerts = () => {
    return (
        <div className='alert-container'>
            <div className='alert-body-container'>
                <Sidebar />
                <div className='content'>
                    <h2>Alerts</h2>
                    <div className='alert-titles'>
                        <div className='alert-col-title'>No</div>
                        <div className='alert-col-title'>Place</div>
                        <div className='alert-col-title'>Animal Type</div>
                        <div className='alert-col-title'>Count</div>
                    </div>

                    {/* Sample IDS alerts */}
                    <div className='alert-row type-ids'>
                        <div className='alert-col'>1</div>
                        <div className='alert-col'>Anna Nagar</div>
                        <div className='alert-col'>Cow</div>
                        <div className='alert-col'>2</div>
                    </div>

                    <div className='alert-row type-malware'>
                        <div className='alert-col'>2</div>
                        <div className='alert-col'>Mount Road</div>
                        <div className='alert-col'>Dogs</div>
                        <div className='alert-col'>5</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alerts;
