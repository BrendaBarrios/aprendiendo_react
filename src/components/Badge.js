import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';



class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo platzi" /> 
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/0177d8aafbd9e489e43289170fd51211?s=80" alt="Avatar"/>  
                    <h1>Brenda<br/>Yasmin</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Ingeniero de Software</h3>
                    <div>@yas_brenda</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>

            </div>
        )
    }
}

export default Badge;