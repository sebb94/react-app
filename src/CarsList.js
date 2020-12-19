import React from 'react'
import Card from './Card'


const CarsList = ({ cars }) =>{
    return(
        <div id="main">
        {
            cars.map( (car, i) =>{
                return (
                    <Card 
                        key={i} 
                        name={cars[i].name} 
                        description={cars[i].description} 
                        file={cars[i].file}
                    />
                )
            })
        }
        </div>
    );
}

export default CarsList;