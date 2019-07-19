import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Wizard from '../Wizard/Wizard';

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
        this.getAllHouses = this.getAllHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount(){
        this.getAllHouses();
    }



    getAllHouses(){
        console.log(this.state)
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
        console.log(this.state)
    }

    deleteHouse(id){
        axios.delete(`/api/house/${id}`).then(res => {
            this.getAllHouses();
        })
    }

    render(){
        console.log(this.state)
        const housesToDisplay = this.state.houses.map((house,index) => {
            return <div key={index}><House houses={house} deleteHouse={this.deleteHouse} /></div>
        })
        return (
            <div>
            
                {/* <Wizard deleteHouse={this.deleteHouse}/> */}
               <Link to='/wizard' > <button>Add New Property</button></Link>
               <Link to='/'><button>Cancel</button></Link>
               {housesToDisplay}
            </div>
        )
    }
}