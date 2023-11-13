import React from "react";
import "./Sidebar.css"
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar,
  } from 'react-icons/fa';

const Sidebar = () =>{
    return(
        <div className="Sidebar">
            <ul className="Sidebar-list">
                <li className="Sidebar-item">
                    <span>
                        <FaInbox />
                    </span>
                    <span>Inbox</span>
                </li>
                <li className="Sidebar-item">
                    <span>
                        <FaRegCalendar />
                    </span>
                    <span>Today</span>
                </li>
                <li className="Sidebar-item">
                    <span>
                        <FaRegCalendarAlt />
                    </span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="Sidebar-middle">
                <span>
                    <FaChevronDown />
                </span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar-projects">Projects here!</ul>

            Add Project Component here!
        </div>
    )
}

export default Sidebar;