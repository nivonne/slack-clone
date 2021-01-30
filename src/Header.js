import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
/*import { AccessTimeIcon, SearchIcon } from "@material-ui/icons";*/

function Header () {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar" alt="Nadia Matus" src="" />
                <AccessTimeIcon />
            </div>

            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search some Channel" />
            </div>

            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    );
}

export default Header;
