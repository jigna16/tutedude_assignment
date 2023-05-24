import React from 'react'
import Style from "../Style/FirstRow.module.css"
const FirstRow = () => {
    return (
        <div className={Style.main}>

            {/* withdraw balance section*/}
            <div className={Style.withdrawBox}>
                <div className={Style.TopContainer}>
                    <div className={Style.TopContainerChild}>
                        <div className={Style.firstChild}>
                            <p>Referral Earning</p>
                            <p>₹ 2,500</p>
                        </div>

                        <div className={Style.firstChild}>
                            <p>Total Referrals</p>
                            <p>7</p>
                        </div>
                    </div>

                    <div className={Style.TopContainerChildSecond}>
                        <div className={Style.firstChild}>
                            <p>Wallet Balance</p>
                            <p>₹ 500</p>
                        </div>
                    </div>


                </div>

                <div >
                    <button className={Style.ButtonColor}>Withdraw Balance</button>
                </div>



            </div>

            {/* referal section*/}
            <div className={Style.Referral}>
                <h3>Your Referral Code</h3>

                <div className={Style.ReferralFirst}>
                    <div>
                        <div>E</div>
                        <div>D</div>
                        <div>C</div>
                        <div>H</div>
                        <div>5</div>
                        <div>4</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstRow