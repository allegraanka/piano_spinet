import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <ul>
            <li><span className='heading-size'>{props.term.term_id}</span></li>
            <li><span className='tagline-size'>{props.term.name}</span></li>
            <li><span>{props.term.description}</span></li>
            <li>This is a {props.term.type} term.</li>
            <li>Created on: {props.term.create_date}</li>
        </ul>
    </div>
);