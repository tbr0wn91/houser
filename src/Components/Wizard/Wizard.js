import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0

        }
        this.addHouse = this.addHouse.bind(this);
    }

    addHouse(){
        const {name, address, city, state, zip} = this.state;
        axios.post('/api/house', {name, address, city, state, zip}).then(res => {
            this.setState({
                name: "",
                address: "",
                city: "",
                state: "",
                zip: 0
            })
        })
    }

    updateInputs(property, value){
        this.setState({
            [property]: value
        });
    }

    

    render(){
        const {name, address, city, state, zipcode} = this.state;
        return (
            <div>
               Name: <input onChange={(e) => this.updateInputs(e.target.name, e.target.value)} type='text' value={name} name="name" />

               Address: <input onChange={(e) => this.updateInputs(e.target.name, e.target.value)} type="text" value={address} name="address"/>

                City: <input onChange={(e) => this.updateInputs(e.target.name, e.target.value)} type="text" value={city} name="city"/>

                State: <input onChange={(e) => this.updateInputs(e.target.name, e.target.value)} type="text" value={state} name="state"/>

                Zipcode:<input onChange={(e) => this.updateInputs(e.target.name, e.target.value)}type="integer" value={zipcode} name="zipcode"/>

               <Link to="/"> <button onClick={this.addHouse}>Add House</button></Link>
            </div>
        )
    }
}