import React, { Component } from 'react';
import './App.css'
import Units from "./dropdownUnitValue"
import Text from './text'
import configuration from '../src/configuration/configuration'


export default class dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: " ",
            firstUnit: "",
            secondUnit: "",
            unitValue1: 0,
            unitValue2: 0
        };
    }

    getUnit = event => {
        console.log("type--> ", event.target.value);

        this.setState({ unit: event.target.value });
    }


    buttonClick = () => {
        
        var data = {
            firstUnit: this.state.firstUnit,
            secondUnit: this.state.secondUnit,
            unitValue1: this.state.unitValue1
        }

        configuration(data)
            .then(response => {
                console.log("success  ", response.data);
            }).catch((err) => {
                console.log("Something went wrong")
            })
    }

    handleFirstUnit=(val)=>{
        this.setState({firstUnit:val})

    }

    handleSecondUnit=(val)=>{
        this.setState({secondUnit:val})
    }
    render() {
        return (
            <div className="dropdownMain">
                <div className="dropdown">
                    <select onChange={this.getUnit}>
                        <option value="N/A">UNIT</option>
                        <option value="0">Length</option>
                        <option value="1">Volume</option>
                        <option value="2">Weight</option>
                        <option value="3">Temperature</option>
                    </select>

                </div>
                <div className="dropdownChild">
                    <Units unit={this.state.unit} firstUnit={this.handleFirstUnit} secondUnit={this.handleSecondUnit}/>
                </div>
                    <Text></Text>
                <div>
                    <button type="submit" onClick={this.buttonClick}>submit</button>
                </div>
            </div>
        )

    }
}