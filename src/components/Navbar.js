import React from 'react';
// import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        // <div className={classes.container}>
        //     <div className={classes.navbar_logo}>
        //         <img src='/icons8.png' alt="Create content" />
        //     </div>
        //     <div className={classes.navbar_text}>
        //         <h3>Create Content</h3>
        //     </div>
        // </div>
        <nav class="navbar navbar-light bg-dark">
            <a class="navbar-brand" href="#">
                <img src="/icons8.png" width="30" height="30" className="d-inline-block align-top" alt="Create Content" />
            </a>
        </nav>
    )
}

export default Navbar;