import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <h2>Taskboard</h2>
                <div className="menu">
                    <a href="#">Home</a>
                    <a href="#">Board</a>
                    <a href="#">Chat</a>
                    <a href="#">Calendar</a>
                    <a href="#">Template</a>
                </div>
                <div className="account">
                    <h3>Account</h3>
                    <a href="#">Account</a>
                    <a href="#">Settings</a>
                </div>
                <div className="upgrade">
                    <button className="upgrade-button">See plans</button>
                </div>
            </div>

            <div className="main-content">
                <div className="header">
                    <input type="text" placeholder="Search Task" />
                    <div className="profile">
                        <button className="create-task">Create New Task</button>
                        <img src="https://via.placeholder.com/40" alt="Profile" />
                    </div>
                </div>
                <div className="my-task">My Task</div>
                <div className="tasks">
                    <div className="priority-card">Priority Task <br /> 23/34</div>
                    <div className="upcoming-card">Upcoming Task <br /> 3/34</div>
                    <div className="overdue-card">Overdue Task <br /> 10/34</div>
                    <div className="pending-card">Pending Task <br /> 2/34</div>
                </div>

                <div className="urgency">
                    <h3>Urgently task</h3>
                    <div className="projects-name">Project 1</div>
                    <div className="urgency-bar1"></div>
                    <div className="projects-name">Project 2</div>
                    <div className="urgency-bar2"></div>
                    <div className="projects-name">Project 3</div>
                    <div className="urgency-bar3"></div>
                    <div className="projects-name">Project 4</div>
                    <div className="urgency-bar4"></div>
                </div>

                <div className="workspace">
                    <h3>Workspace</h3>
                    <div className="project-row">
                        <div className="project-card">Dstudio Space</div>
                        <div className="project-card">Team Space</div>
                        <div className="project-card">CO Space</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;