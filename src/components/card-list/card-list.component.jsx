import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.terms.map(term => (
          <Card key={term.term_id} term={term}/>
        ))}
    </div>
);