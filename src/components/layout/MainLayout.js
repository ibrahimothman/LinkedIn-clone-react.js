import React from 'react'
import Header from '../Header'
import '../../App.css'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="app_body">
                {children}
            </div>
        </div>
    )
}

export default MainLayout
