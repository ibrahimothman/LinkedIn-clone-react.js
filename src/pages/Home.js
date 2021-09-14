import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

function Home() {
    return (
        <div>
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
}

export default Home
