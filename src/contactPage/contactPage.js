import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function ContactPage(props) {
    return (
        <div className="container">
        <h1 className="text-center text-uppercase">контакты</h1>
        <p className="text-center w-75 m-auto">Здравствуйте, здесь вы найдете информацию, благодаря которой вы можете связаться с нами!</p>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
               <div className="card-body text-center">
                 < FontAwesomeIcon icon={faPhone} aria-hidden="true"/>
                 <h2 className="text-uppercase mb-5">наши телефоны</h2>
                 <p>+79172337480</p>
               </div>
             </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
               <div className="card-body text-center">
                 < FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true"/>
                 <h2 className="text-uppercase mb-5">местоположение</h2>
                <address>Самарский университет</address>
               </div>
             </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
               <div className="card-body text-center">
                  < FontAwesomeIcon icon={faGlobe} aria-hidden="true"/>
                 <h2 className="text-uppercase mb-5">email</h2>
                 <p>nashmail@mail.ru</p>
               </div>
             </div>
          </div>
        </div>
    </div>);
}

export default ContactPage;