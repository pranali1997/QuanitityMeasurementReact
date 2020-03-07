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
            firstUnit: "INCH",
            secondUnit: "INCH",
            unitValue1: this.props.val,
            unitValue2: 0
        };
    }

    getUnit = event => {
        console.log("type--> ", event.target.value);

        this.setState({ unit: event.target.value });
    }

    handleUnitType2(val) {
        this.setState({ secondUnit: val })
    }

    buttonClick = () => {
        var data = {
            firstUnit: this.state.firstUnit,
            secondUnit: this.state.secondUnit,
            unitValue1: this.state.unitValue
        }
        configuration(data)
            .then(response => {
                console.log("success  ", response.data);
            }).catch((err) => {
                console.log("Something went wrong")
            })
    }
    render() {
        return (
            <div className="dropdownMain">
                <div className="dropdown">
                    <select onChange={this.getUnit}>
                        <option value="N/A">UNIT</option>
                        <option value="Length">Length</option>
                        <option value="Volume">Volume</option>
                        <option value="Weight">Weight</option>
                        <option value="Temperature">Temperature</option>
                    </select>

                </div>
                <div className="dropdownChild">
                    <Units unit={this.state.unit} unitType2={this.handleUnitType2} />
                    <label id="labels">&#x21c4;</label>
                    <Units unit={this.state.unit} />
                </div>
                <div className="textValue">
                    <Text></Text>
                    <label id="labels">=</label>
                    <Text></Text>
                </div>
                <div>
                    <button type="submit" onClick={this.buttonClick}>submit</button>
                </div>
            </div>
        )

    }
}