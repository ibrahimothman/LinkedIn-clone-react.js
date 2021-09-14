import React from 'react'
import './Widgets.css'
import Card from '../ui/Card'
import InfoIcon from '@material-ui/icons/Info'
import RecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    return (

        <div className='widgets'>
            <div className="widgets__header">
                <h3>LinkedIn News</h3>
                <InfoIcon />
            </div>
            <div className="widgets__articles">
                <div className="widgets__article">
                    <div className="widgets__left">
                        <RecordIcon />
                    </div>
                    <div className="widgets__right">
                        <h4>IBRA React is back</h4>
                        <p>Top News - 999 readers</p>

                    </div>
                </div>

                <div className="widgets__article">
                    <div className="widgets__left">
                        <RecordIcon />
                    </div>
                    <div className="widgets__right">
                        <h4>IBRA React is back</h4>
                        <p>Top News - 999 readers</p>

                    </div>
                </div>

                <div className="widgets__article">
                    <div className="widgets__left">
                        <RecordIcon />
                    </div>
                    <div className="widgets__right">
                        <h4>IBRA React is back</h4>
                        <p>Top News - 999 readers</p>

                    </div>
                </div>

                <div className="widgets__article">
                    <div className="widgets__left">
                        <RecordIcon />
                    </div>
                    <div className="widgets__right">
                        <h4>IBRA React is back</h4>
                        <p>Top News - 999 readers</p>

                    </div>
                </div>

                <div className="widgets__article">
                    <div className="widgets__left">
                        <RecordIcon />
                    </div>
                    <div className="widgets__right">
                        <h4>IBRA React is back</h4>
                        <p>Top News - 999 readers</p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Widgets
