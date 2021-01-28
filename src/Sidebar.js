import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcone from "@material-ui/icons/Create";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack-Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Nadia Matus
                    </h3>
                </div>
                <CreateIcone />
            </div>
        </div>
    );
}

export default Sidebar;