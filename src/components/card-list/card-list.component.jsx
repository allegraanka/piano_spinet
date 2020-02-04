import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
  <>
    <div className='card-list'>
        <div className='general-term-list-info'>
          <h2>Total Terms: {props.termCount} </h2>
        </div>
        {props.terms.map(term => (
          <Card key={term.term_id} term={term}/>
        ))}
    </div>
  </>
);