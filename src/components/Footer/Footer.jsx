import React from "react";
import { Link } from "react-router-dom"
import "./Footer.css";
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
   <div>
    <div className="d-flex flex-column h-100">


<footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
        <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
             <img src={logo} alt="" style={{width:"300px"}} />
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">OUR SERVIECS</h5>
                <ul className="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">CUSTOM LINK</h5>
                <ul className="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">ADDRESS</h5>
                <p className="text-white">ghulamdim316@gmail.com</p>
                <p className="text-white">123, Faislabad ,Pakistan</p>
                <form action="#">
                    <div className="input-group mb-3">
          
                       
                    </div>
                </form>
            </div>
        </div>
    </div>
</footer>
</div>
   </div>
  );
};

export default Footer;
