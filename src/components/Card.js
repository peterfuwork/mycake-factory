import React from 'react';

const Card = (props) => {
    console.log('card', props);
    return(
        <div className="col-sm-4 Card">
            <div className="info">
                <div className="img-wrapper">
                    <img src={props.imageUrl} />
                </div>
                <div className="title">{props.name}</div>
                <div className="text">{props.description}</div>
            </div>
        </div>
    );
}

export default Card;