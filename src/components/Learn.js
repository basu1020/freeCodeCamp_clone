import React from 'react'
import { Link } from 'react-router-dom'

const Learn = () => {

    return (
        <>
            <div className="body">
            <h3>Courses to get you started (Sign in to track your progress)</h3>
                <div className="body__courses">
                    <Link className="courses" to={"/learn/responsive"}>
                        <i class="lni lni-laptop-phone"></i>
                        <p>(New) Responsive Web Design Certification (300 hours)</p>
                    </Link>
                    <Link className="courses" to={"/learn/javascript"}>
                        <i class="lni lni-javascript"></i>
                        <p>Javascript Data Structure and Algorithms</p>
                    </Link>
                    <Link className="courses" to={"/learn/front-end"}>
                        <i class="lni lni-react"></i>
                        <p>Learn Frontend Development Libraries Certification</p>
                    </Link>
                    <Link className="courses" to={"/learn/responsive"}>
                        <i class="lni lni-bar-chart"></i>
                        <p>Data Visualization Certification</p>
                    </Link>
                    <Link className="courses" to={"/learn/back-end"}>
                        <i class="lni lni-nodejs"></i>
                        <p>Back End Development and APIs Certification</p>
                    </Link>
                    <Link className="courses" to={"/learn/python"}>
                        <i class="lni lni-python"></i>
                        <p>Python Scientific Computing Certification</p>
                    </Link>
                    <Link className="courses" to={"/learn/information-security"}>
                        <i class="fas fa-server"></i>
                        <p>Information Security Certification</p>
                    </Link>
                    <Link className="courses" to={"/learn/machine-learning"}>
                        <i class="fas fa-robot"></i>
                        <p>Machine Learning Certification</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Learn