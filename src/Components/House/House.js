import React, {Component} from 'react';

export default function House(props){
    console.log(`this is props`, props)
    const {houses,deleteHouse} = props;
    return (
        
        <div>
        {houses.name}
        {houses.address}
        {houses.city}
        {houses.state}
        {houses.zip}

        <button onClick={deleteHouse}>Delete</button>
        </div>
    )

}