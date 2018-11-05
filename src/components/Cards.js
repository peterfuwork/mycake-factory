import React from 'react';
import Card from './Card';

const Cards = (props) => {
    const cakes = props.cakes.map(cake => {
        return (
                <Card
                imageUrl={cake.imageUrl}
                name={cake.name}
                description={cake.description}
                />
        )
    })
    return(
        <div className="row Cards">
            { cakes }
        </div>
    );
}

export default Cards;