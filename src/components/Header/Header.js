import React from 'react';
// import { Container, Col, Row } from 'react-bootstrap';
import '../Header/Header.css';
// import { Avatar } from '@mui/material';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand mx-5 my-4 ps-5" href="#"><img src="/NavLogo.png" alt="Thire" /></a>
            <div className="d-flex">
                <a className="navbar-brand mx-4 text-secondary" href="#">Home</a>
                <a className="navbar-brand text-secondary" href="#">Abhilash1234</a>
                {/* <a className="navbar-brand text-secondary" href="#"><Avatar src="/broken-image.jpg">A</Avatar></a> */}
                <a className="navbar-brand text-secondary pe-5" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#CBCBCB" className="bi bi-person-circle mx-1" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg></a>
            </div>
        </nav>
    )
}

export default Header;