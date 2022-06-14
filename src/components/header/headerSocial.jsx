import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const HeaderSocial = () =>{
    return(
        <div className="header__social">
            <a href="https://linkedin.com" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com" target="_blank"><BsGithub/></a>

        </div>
    )
}
export default HeaderSocial