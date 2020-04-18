import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Card, Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Routes} from '../routes';


function ContactPage(props) {
    return (
        <div className="container">
        <h3 className="text-center text-uppercase">contact us</h3>
        <p className="text-center w-75 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum purus at sem ornare sodales. Morbi leo nulla, pharetra vel felis nec, ullamcorper condimentum quam.</p>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
               <div className="card-body text-center">
                 <i className="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                 <h4 className="text-uppercase mb-5">call us</h4>
                 <p>+8801683615582,+8801750603409</p>
               </div>
             </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
               <div className="card-body text-center">
                 <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                 <h4 className="text-uppercase mb-5">office loaction</h4>
                <address>Suite 02, Level 12, Sahera Tropical Center </address>
               </div>
             </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
               <div className="card-body text-center">
                 <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                 <h4 className="text-uppercase mb-5">office loaction</h4>
                 <address>Suite 02, Level 12, Sahera Tropical Center </address>
               </div>
             </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
               <div className="card-body text-center">
                 <i className="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                 <h4 className="text-uppercase mb-5">email</h4>
                 <p>http://al.a.noman1416@gmail.com</p>
               </div>
             </div>
          </div>
        </div>
    </div>);
}

export default ContactPage;