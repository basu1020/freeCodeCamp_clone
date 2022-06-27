import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer__about">
                        <p>freeCodeCamp is a donor-supported tax-exempt 501(c)(3) nonprofit organization (United States Federal Tax Identification Number: 82-0779546)</p>

                        <p>Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.</p>

                        <p>Donations to freeCodeCamp go toward our education initiatives, and help pay for servers, services, and staff.</p>

                        <p>You can</p><a href=""> make a tax-deductible donation here.</a>
                    </div>
                    <div className="trending-guides">
                        <div className="trending-guides__title">
                            <p>Trending Guides</p>
                        </div>
                        <div className="footer__trending-guides--links">
                            <div className="first-section">

                                <a href=''>Zoom Screen Sharing</a>
                                <a href=''>Decimal Place Value</a>
                                <a href=''>How to Get Into BIOS</a>
                                <a href=''>String to Int in C++</a>
                                <a href=''>What is msmpeng.exe</a>
                                <a href=''>Facetime Not Working</a>
                                <a href=''>Desktop Icons Missing</a>
                                <a href=''>How to Copy and Paste</a>
                                <a href=''>Delete a Page in Word</a>
                                <a href=''>vcruntime140.dll Error</a>

                            </div>
                            <div className="second-section">

                                <a href="">C++ Vector</a>
                                <a href="">What is CPU</a>
                                <a href="">IPV4 vs IPV6</a>
                                <a href="">What is IPTV</a>
                                <a href="">HTML Font Size</a>
                                <a href="">Change Mouse DPI</a>
                                <a href="">How to Make a GIF</a>
                                <a href=""> Git Rename Branch</a>
                                <a href="">Make a Video Game</a>
                                <a href="">CSS Media Queries</a>

                            </div>
                            <div className="third-section">

                                <a href="">How to Open .dat Files</a>
                                <a href="">Record Calls on iPhone</a>
                                <a href="">Ascending vs Descending</a>
                                <a href="">HTML Email Link Tutorial</a>
                                <a href="">Python List Comprehension</a>
                                <a href="">Password Protect Zip File</a>
                                <a href="">Restore Deleted Word File</a>
                                <a href="">Software Engineering Guide</a>
                                <a href="">How to Find Your IP Address</a>
                                <a href="">How to Find iPhone Download</a>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer