import React, {Component} from 'react';

export default class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: 0

        }

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
            </div>
        )
    }
}