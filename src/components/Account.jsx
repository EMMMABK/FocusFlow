import React from 'react'
import acc_img from '../assets/account.png'
import acc_diagram from '../assets/diagram.png'
import './Account.css'

function Account() {
    return (
        <div className='account_box'>
            <div className='account_taskboard'>
                <div className='account_title'>Account</div>
                <div className='taskboard'>
                    Taskboard
                </div>
            </div>
            <div className='account_seeting_box'>
                <div className='account_img_box'>
                    <div className='account_img'>
                        <img src={acc_img} alt="" />
                        <div className='account_img_info'>
                            <div className='account_img_name'>Laura Cintiya</div>
                            <div className='account_img_email'>Laura@site.com</div>
                        </div>
                    </div>
                    <div className='account_diagram'>
                        <img src={acc_diagram} alt="" />
                    </div>
                </div>
                <div className='account_settings'>
                    <div className='account_settings_title'>Account Settings</div>
                    <div className='account_settings_input'>
                        <div className='account_settings_input_name'>
                            <div className='account_settings_text_input'>
                                <div>First name</div>
                                <div>
                                    <input type="" />
                                </div>
                            </div>
                            <div className='account_settings_text_input'>
                                <div>Last Name</div>
                                <div>
                                    <input type="" />
                                </div>
                            </div>
                        </div>
                        <div className='account_settings_input_name'>
                            <div className='account_settings_text_input'>
                                <div>Employee ID</div>
                                <div>
                                    <input type="" />
                                </div>
                            </div>
                            <div className='account_settings_text_input'>
                                <div>Position</div>
                                <div>
                                    <input type="" />
                                </div>
                            </div>
                        </div>
                        <div className='account_settings_input_name'>
                            <div className='account_settings_text_input'>
                                <div>E-mail</div>
                                <div>
                                    <input type="" />
                                </div>
                            </div>
                            <div className='account_settings_text_input'>
                                <div>Phone Number</div>
                                <div>
                                    <input type="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
