import React from 'react'

const Home = () => {
  return (
    <>
      <div className='body'>
        <h2> Welcome to freeCodeCamp_clone</h2>
        <h3>Courses to get you started</h3>
        <div className="body__courses">
          <div className="courses">
            <i class="lni lni-laptop-phone"></i>
            <p>(New) Responsive Web Design Certification (300 hours)</p>
          </div>
          <div className="courses">
            <i class="lni lni-javascript"></i>
            <p>Javascript Data Structure and Algorithms</p>
          </div>
          <div className="courses">
            <i class="lni lni-react"></i>
            <p>Learn Frontend Development Libraries Certification</p>
          </div>
          <div className="courses">
            <i class="lni lni-bar-chart"></i>
            <p>Data Visualization Certification</p>
          </div>
          <div className="courses">
            <i class="lni lni-nodejs"></i>
            <p>Back End Development and APIs Certification</p>
          </div>
          <div className="courses">
          <i class="lni lni-python"></i>
            <p>Python Scientific Computing Certification</p>
          </div>
          <div className="courses">
          <i class="fas fa-server"></i>
            <p>Information Security Certification</p>
          </div>
          <div className="courses">
          <i class="fas fa-robot"></i>
            <p>Machine Learning Certification</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home