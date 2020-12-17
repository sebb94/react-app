import React from 'react'

const Card = (props)  => {
    return(
    <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 image-main">
        <div className="image-container">
            <img src={props.file} alt="logo"/>
        </div>
        
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    </div> 
    )
}

export default Card;