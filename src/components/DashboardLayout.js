import React from 'react'

const DashboardLayout = ({children}) => {
    return (
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                This is Side Nav Bar
            </nav>
            <div className="main-container">
                These are children
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;