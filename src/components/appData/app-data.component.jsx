import React from 'react';
import './app-data.styles.css';

export const AppData = props => (
    <div className='app-data-container'>
        <div>
            <h1> {props.appData.aid} </h1>
        </div>
    </div>
);