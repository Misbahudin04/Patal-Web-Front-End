import React from "react";
import "./sponsor.css";

const Sponsor = (props) =>{
    return(
        <div id="visi" class="sponsorbox">
            <div className="centerr">
                <img src={props.logo} width="100px" alt="logo_sponsor"/>
            </div>
        </div>
    )
}

export default Sponsor;