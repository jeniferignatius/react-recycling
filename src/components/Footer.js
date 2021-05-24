import React from 'react'
import '../App.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer id="lab_social_icon_footer" className="bg-green-500 text-center text-xs p-3 absolute bottom-0 w-full border-t">
            <div className="container">
                <link
                    href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
                    rel="stylesheet" />


                <div className="text-center center-block">

                    <a href="https://www.facebook.com/"><i
                        id="social-fb"
                        className="fa fa-facebook-square fa-2x social" /></a>
                    <a href="https://twitter.com/"><i
                        id="social-tw"
                        className="fa fa-twitter-square fa-2x social" /></a>
                    <a href="https://google.com/"><i
                        id="social-gp"
                        className="fa fa-google-plus-square fa-2x social" /></a>
                    <a href="mailto:#"><i id="social-em"
                        className="fa fa-envelope-square fa-2x social" /></a>
                    <p className="copyright">&copy; Copyright {currentYear}</p>
                    <p className="copyright">This is a fictitious company. Any resemblance to real products or services is purely coincidental.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer