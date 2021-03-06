import React from 'react'
import '../App.css';

function Footer(){
    return (
        <footer id="lab_social_icon_footer" className="bg-green-500 text-center text-xs p-3 absolute bottom-0 w-full border-t">
            <div className="container">
             <link
                href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
                rel="stylesheet"/>
                
                <p>&copy; Copyright 2021</p>
                    <div className="text-center center-block">
                        <a href="https://www.facebook.com/"><i
    id="social-fb"
    className="fa fa-facebook-square fa-2x social"/></a>
                        <a href="https://twitter.com/"><i
    id="social-tw"
    className="fa fa-twitter-square fa-2x social"/></a>
                        <a href="https://google.com/"><i
    id="social-gp"
    className="fa fa-google-plus-square fa-2x social"/></a>
                        <a href="mailto:#"><i id="social-em"
    className="fa fa-envelope-square fa-2x social"/></a>
                    </div>
                <p>Recycling center</p>
                <p>Kaskilaaksontie 7</p>
                <p>Espoo, 02360</p>
                <p>Tel : 12345667</p>
            </div>
        </footer>
    )
}

export default Footer