import React from 'react';
import css from "./Footer.module.css"
import logo from "../../assets/logo.png"
import {InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UsersIcon,LinkIcon} from "@heroicons/react/outline"

const Footer = () => {
    return (
        <div>
            <div className={css.cFooterWrapper}>
                <hr />
                <div className={css.cFooter}>
                    <div className={css.logo}>
                        <img src={logo} alt="logo" />
                        <span>amazon</span>
                    </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Contact Us</span>
                            <span className={css.pngLine}>
                                <LocationMarkerIcon className={css.icon} />
                                <span>ponak north avenue FL 32801</span>
                            </span>
                            <span className={css.pngLine}>
                                <InboxIcon className={css.icon} />
                                <a href="mailto:support@amazon.com">support@amazon.com</a>
                            </span>
                            <span className={css.pngLine}>
                                <PhoneIcon className={css.icon} />
                                <a href="tel:352-306-4415">352-306-4415</a>
                            </span>
                        </div>
                    </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Contact Us</span>
                            <span className={css.pngLine}>
                                <LocationMarkerIcon className={css.icon} />
                                <span>ponak north avenue FL 32801</span>
                            </span>
                            </div>
                            </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Account</span>
                            <span className={css.pngLine}>
                                <LoginIcon className={css.icon} />
                                <span>Sign In</span>
                            </span>
                            </div>
                            </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Company</span>
                            <span className={css.pngLine}>
                                <UsersIcon className={css.icon} />
                                <a href="/aboutus">
                                    About us
                                </a>
                            </span>
                            </div>
                            </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Recourses</span>
                            <span className={css.pngLine}>
                                <LinkIcon className={css.icon} />
                                <p>Safety Privacy & Terms</p>
                            </span>
                            </div>
                            </div> 
                </div>
            <div className={css.copyRight}>
                <span>Copyright ©2022 by Amazon, Inc.</span>
                <span>All rights reserved.</span>
            </div>
            </div>
        </div>
    );
};

export default Footer;