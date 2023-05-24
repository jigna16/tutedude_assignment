import React from 'react'
import Style from "../Style/Navbar.module.css"
import tuteDude from '../images/TuteDude.jpeg'
import {CgProfile} from "react-icons/cg"
import {IoIosArrowDropdown} from "react-icons/io"

export const Navbar = () => {
    return (
        <div className={Style.NavbarDiv}>

            <div>
                <div>
                    <img src={tuteDude} alt="" />
                </div>

            </div>
            <div>
                <div className={Style.hide}>My assignment </div>
                <div className={Style.hide}>Chat with Mentor</div>
                <div id={Style.profile}>
                
                 <div><CgProfile/></div>
                <div>Profile Name</div>
                <div><IoIosArrowDropdown/></div>

                </div>
            </div>

        </div>
    )
}
