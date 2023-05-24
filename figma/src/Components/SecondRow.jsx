import React from 'react'
import Style from "../Style/SecondRow.module.css"
import { FaUserFriends } from "react-icons/fa"
import { BsFillTagFill } from "react-icons/bs"
import { FaRupeeSign } from "react-icons/fa"
import { TbDiscount2 } from "react-icons/tb"
import { IoMdWallet } from "react-icons/io"

const SecondRow = () => {
    return (
        <div className={Style.main}>

            <h2>How does it work?</h2>
            <div>
                <div>
                    <div id={Style.img}><FaUserFriends style={{ height: "20px", width: '20px' }} /></div>
                    <div id={Style.content} >
                        <h4>Invite your Friends</h4>
                        <div id={Style.script}>Share the link tutedude.com with your friends</div>
                    </div>
                </div>

                <div>
                    <div id={Style.img}><BsFillTagFill style={{ height: "20px", width: '20px' }} /></div>
                    <div id={Style.content}>
                        <h4>Friend purchases any course</h4>
                        <div id={Style.script}>Using yout REFERRL CODE in the payment page</div>
                    </div>
                </div>

                <div>
                    <div id={Style.img}><FaRupeeSign style={{ height: "20px", width: '20px' }} /></div>
                    <div id={Style.content}>
                        <h4>you get ₹ 200 as referral money </h4>
                        <div id={Style.script}>On total purchase the friend makes, into your wallet</div>
                    </div>
                </div>

                <div>
                    <div id={Style.img}><TbDiscount2 style={{ height: "20px", width: '20px' }} /></div>
                    <div id={Style.content}>
                        <h4>Your Friend gets ₹ 200 off</h4>
                        <div id={Style.script}>On his overall fee on successful purchase using your referral code</div>
                    </div>
                </div>

                <div>
                    <div id={Style.img}><IoMdWallet style={{ height: "20px", width: '20px' }} /></div>
                    <div id={Style.content}>
                        <h4>Transfer money from wallet</h4>
                        <div id={Style.script}>When the wallet-blalnce reaches ₹ 200 or more you can withdraw it</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondRow