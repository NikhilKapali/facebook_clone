import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="./Facebook-logo.png"
                    alt="fb-logo"
                />

                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>
            <div className="header__center">
                <div className="header__options header__options__active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <SupervisedUserCircleOutlinedIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Nikhil Kapali</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                </div>
             
        </div>
    )
}

export default header
