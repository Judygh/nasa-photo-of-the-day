import React from 'react';

export function Text(props) {

    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}