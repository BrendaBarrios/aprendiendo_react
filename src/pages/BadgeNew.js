import React from "react";

import './styles/BadgeNew.css';
import  Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={'Brenda'}
                                lastName={'Barrios'}
                                avatarUrl={"https://s.gravatar.com/avatar/0177d8aafbd9e489e43289170fd51211?s=80"}
                                jobTitle={'Ingeniera de Sofware'}
                                twitter={'yas_brenda'}/>,
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;