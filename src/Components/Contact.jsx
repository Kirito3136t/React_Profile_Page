import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import mailme from '../Components/public/image/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                
                <h3> <strong>Akash Choughule</strong></h3>
                
                <h4>Email Id: 2020.akash.choughule@ves.ac.in</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=2020.akash.choughule@ves.ac.in"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Contant Info: 1234567890</h4>

                
                
                        <a href="https://www.facebook.com/">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://twitter.com/i/flow/login" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://www.linkedin.com/login">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                        
                
            </section>
        )
    }
}

export default Contact
