import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <h1>{props.heading}</h1>
                <img src={props.image} alt='none' />
                <p>{props.para}</p>
            </div>
        </div>
    )
}

export default Card