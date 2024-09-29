import React from 'react';
import Detect from './Detect';

const Landing = () => {
  return (
    <div className="App">
      <div className="site-wrap">
        <div className="site-section" id="glance-section" data-aos="fade">
          <div className="site-section bg-dark" id="demo-section" data-aos="fade">
            <div style={{ marginTop: '100px', marginBottom: '50px' }}>
              <Detect />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;