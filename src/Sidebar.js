import React from 'react';
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from "./SidebarOption";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Button } from "@material-ui/core";

function Sidebar(){
    return (
        <div className= "sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text= "Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text= "Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text= "Lists"/>
            <SidebarOption Icon={PersonOutlineIcon} text= "Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text= "More" />
            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar; // to use it outside of Sidebar.js
