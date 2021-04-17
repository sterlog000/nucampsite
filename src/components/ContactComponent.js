import React from 'react';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function Contact(props) {
    return (
        <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            );
        }

export default Contact;
