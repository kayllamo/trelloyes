import React from 'react';
import Card from './card.js'
import './list.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            title={card.title}
            content={card.content}
          />
        )}
      </div>
    </section>
  )
}