import React from 'react';
import './app-data.styles.css';

export const AppData = props => (
    <div className='app-data-container'>
        <div className='app-basic-data1'>
            <h1><span>{props.appData.aid}</span></h1>
            <p><span>{props.appData.name}</span></p>
            <p><span>api token: {props.appData.api_token}</span></p>
            <p><span>private key: {props.appData.private_key}</span></p>
        </div>
        <div className='app-basic-data2'>
            <p>user provider: {props.appData.user_provider}</p>
            <p>app state: {props.appData.state}</p>
            <p>site: {props.appData.url}</p>

        </div>
    </div>
);