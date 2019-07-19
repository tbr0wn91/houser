import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }




    render(){
        housesToDisplay = this.state.houses.map(house)
        return (
            <div>
            
                <House />
               <Link to='/wizard' > <button>Add New Property</button></Link>
               <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}