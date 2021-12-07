import React from 'react';

class NavBar extends React.Component{
    render(){
        return(
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo" >MERN Quizz</a>
                </div>
            </div>
        </nav>
        )
    }
}

export default NavBar