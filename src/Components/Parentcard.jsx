import React from 'react'
import Card from './Card'
import Data from './Data'

const Parentcard = () => {
    return (
        <div>
            <Card heading={Data[0].heading} image={Data[0].image} para={Data[0].para} />
            <Card heading={Data[1].heading} image={Data[1].image} para={Data[1].para} />
            <Card heading={Data[2].heading} image={Data[2].image} para={Data[2].para} />
        </div>
    )
}

export default Parentcard