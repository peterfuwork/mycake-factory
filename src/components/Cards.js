import React from 'react';
import Card from './Card';
import LazyLoad from 'react-lazyload';

const Cards = (props) => {
    const cakes = props.cakes.map(cake => {
        return (
            <LazyLoad key={cake.id} height={200} offset={100}>
                <Card
                imageUrl={cake.imageUrl}
                name={cake.name}
                description={cake.description}
                />
            </LazyLoad>
        )
    })
    return(
        <div className="row Cards">
            { cakes }
        </div>
    );
}

export default Cards;